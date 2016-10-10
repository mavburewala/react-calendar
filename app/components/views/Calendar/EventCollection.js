import Event from './Event';
import _ from 'lodash';

class EventCollection {
  constructor(options = {}) {
    const defaults = {
      containerWidth: 700,
      eventLeftOffset: 15,
      eventHorizontalPadding: 10,
      eventVerticalPadding: 1,
    };

    this.options = _.extend({}, defaults, options);

    this.length = 0;
    this.collisionGroups = [];
  }
  add(events) {
    this.events = [];
    for (let i = 0; i < events.length; i += 1) {
      this.events.push(new Event(events[i]));
    }
    this.events = _.sortBy(this.events, 'start');

    this.length = this.events.length;
  }

  findById(id) {
    return _.find(this.events, (event) => event.id === id);
  }

  calculateCollisionGroups() {
    const events = this.events;
    const collisionGroups = [];
    collisionGroups[0] = [];

    collisionGroups[0].push(events[0].id);

    for (let i = 1; i < events.length; i += 1) {
      const event = events[i];
      let found = false;
      let j = i - 1;
      do {
        const previousEvent = events[j];
        if (event.collidesWith(previousEvent)) {
          let found2 = false;
          let k = collisionGroups.length;

          while (!found2) {
            if (_.indexOf(collisionGroups[k], previousEvent.id) !== -1) {
              collisionGroups[k].push(event.id);
              found2 = true;
            }
            k -= 1;
          }
          found = true;
        }
        j -= 1;
      } while (!found && j > -1);

      if (!found) {
        collisionGroups.push([event.id]);
      }
    }

    this.collisionGroups = collisionGroups;
  }

  calculatePositions() {
    for (let i = 0; i < this.events.length; i += 1) {
      this.events[i].top = this.events[i].start * this.options.distancePerMinute;
      this.events[i].height = this.events[i].duration * this.options.distancePerMinute;
    }

    const collisionGroups = this.collisionGroups;

    for (let i = 0; i < collisionGroups.length; i += 1) {
      const group = collisionGroups[i];

      const matrix = [];

      matrix[0] = [];

      for (let j = 0; j < group.length; j += 1) {
        const event = this.findById(group[j]);
        let col = 0;
        let found = false;
        while (!found) {
          const row = this.getMatrixColumnLastRow(matrix, col);

          if (row === false) {
            matrix[0].push(event);
            found = true;
          } else {
            const existingevent = matrix[row][col];
            if (!event.collidesWith(existingevent)) {
              if (matrix[row + 1] === undefined) {
                matrix[row + 1] = [];
              }
              matrix[row + 1][col] = event;
              found = true;
            }
          }

          col += 1;
        }
      }

      let maxRowLength = 1;
      for (let j = 0; j < matrix.length; j += 1) {
        maxRowLength = Math.max(maxRowLength, matrix[j].length);
      }
      const eventWidth = (this.options.containerWidth - this.options.eventHorizontalPadding) / maxRowLength;

      const eventLeftPositions = [];
      for (let j = 0; j < maxRowLength; j += 1) {
        eventLeftPositions[j] = (eventWidth * j) + (this.options.eventLeftOffset);
      }

      for (let row = 0; row < matrix.length; row += 1) {
        for (let col = 0; col < matrix[row].length; col += 1) {
          const event = matrix[row][col];
          event.left = eventLeftPositions[col];
          event.width = eventWidth;
        }
      }
    }
  }

  getMatrixColumnLastRow(matrix, col) {
    for (let row = matrix.length - 1; row > -1; row -= 1) {
      if (matrix[row][col] !== undefined) {
        return row;
      }
    }
    return false;
  }
}

export { EventCollection as default };
