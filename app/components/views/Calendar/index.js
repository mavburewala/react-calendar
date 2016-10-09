/**
 *
 * Home.react.js
 *
 * A common button, if you pass it a prop "route" it'll render a link to a react-router route
 * otherwise it'll render a link with an onclick
 */

 import React, { PropTypes } from 'react';

 import _ from 'underscore';

 import Event from 'components/widgets/event';

 import $ from 'jquery';

 import styles from './styles.css';

 export class Calendar extends React.Component {

   constructor(props) {
     super(props);
     this.state = {
       eventsSectionHeight: 0,
     };
   }


   componentDidMount() {
     setTimeout(() => {
       const height = $('#eventsSection').height();
       this.setState({ distancePerMinute: height / this.props.endTime });
     }, 10);
   }

   intersectingEvents(r1, r2) {
     return !(r2.left > r1.right || r2.right < r1.left || r2.top > r1.bottom || r2.bottom < r1.top);
   }

   allConflictingEvents(event, events) {
     for (let i = 0; i < events.length; i += 1) {
       const eventA = {
         left: events[i].left,
         top: events[i].top,
         right: events[i].left + 200,
         bottom: events[i].top + events[i].height,
       };

       const eventB = {
         left: event.left,
         top: event.top,
         right: event.left + 200,
         bottom: event.top + event.height,
       };

       if (this.intersectingEvents(eventA, eventB)) {
         const left = events[i].left;
         event.left = left + 210;
       }
     }
   }

   calculateConflictingEvents() {
     let events = this.props.events;
     const self = this;
     events = _.sortBy(events, 'start');
     for (let i = 0; i < events.length; i += 1) {
       events[i].top = events[i].start * self.state.distancePerMinute;
       events[i].height = events[i].duration * self.state.distancePerMinute;
       events[i].left = 15;
       this.allConflictingEvents(events[i], events.slice(0, _.indexOf(events, events[i])));
     }
     return events;
   }

   render() {
     const hours = [];
     let start = 0;
     let index = 0;
     let timeOfTheDay = 'AM';
     while (start <= this.props.endTime) {
       let hour = 0;
       if (index > 4 && timeOfTheDay !== 'PM') {
         timeOfTheDay = 'PM';
         index = 1;
       }
       if (timeOfTheDay === 'AM') {
         hour = index + 8;
       } else {
         hour = index;
       }
       index += 1;
       start += 60;
       // hours.push( {start: hour+ ':00 '+ timeOfTheDay, middle: hour+ ':30 '+ timeOfTheDay} )
       hours.push({ start: `${hour}:00 ${timeOfTheDay}`, middle: `${hour}:30 ${timeOfTheDay}` });
     }

     const events = this.calculateConflictingEvents(this.props.events);
     return (
       <div className={`container-fluid ${styles.dayViewMain}`} id="dayView">
         <div className={`container-fluid ${styles.dayViewSkeleton}`}>
           <div className={`col-xs-12 ${styles.hourSection}`}>
             {hours.map((hour, i) => <div key={i} className={`row ${styles.hourTitle}`}>{hour.start}</div>)}
           </div>
         </div>
         <div className={`col-xs-10 ${styles.eventsSection}`} id="eventsSection">
          {events.map((event, i) => <Event eventData={event} key={i} />)}
         </div>
       </div>
     );
   }
 }


 Calendar.propTypes = {
   endTime: PropTypes.number,
   events: PropTypes.array,
 };

 export default Calendar;
