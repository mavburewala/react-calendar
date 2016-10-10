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

 import EventCollection from './EventCollection';

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
       const width = $('#eventsSection').width();
       this.setState({ distancePerMinute: height / this.props.endTime, eventsSectionWidth: width });
     }, 10);
   }

   calculateConflictingEvents() {
     const self = this;
     const events = _.sortBy(this.props.events, 'start');
     for (let i = 0; i < events.length; i += 1) {
       events[i].end = events[i].start + events[i].duration;
       events[i].id = i;
     }
     const eventCollection = new EventCollection({ distancePerMinute: self.state.distancePerMinute, containerWidth: self.state.eventsSectionWidth });

     if (events) {
       eventCollection.add(events);
       eventCollection.calculateCollisionGroups();
       eventCollection.calculatePositions();
     }

     return eventCollection.events;

     // return events;
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
