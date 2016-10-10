class Event {
  constructor(event) {
    this.id = event.id;
    this.title = event.title;
    this.start = event.start;
    this.duration = event.duration;
    this.end = event.end;
    this.top = null;
    this.left = null;
    this.width = null;
    this.height = null;
    this.widthDivisor = null;
  }

  collidesWith(otherEvent) {
    if ((this.start <= otherEvent.start && otherEvent.start <= this.end) ||
         (this.start <= otherEvent.end && otherEvent.end <= this.end) ||
         (otherEvent.start <= this.start && this.start <= otherEvent.end) ||
         (otherEvent.start <= this.end && this.end <= otherEvent.end)) {
      return true;
    }
    return false;
  }
}

export { Event as default };
