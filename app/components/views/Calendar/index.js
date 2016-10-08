/**
 *
 * Home.react.js
 *
 * A common button, if you pass it a prop "route" it'll render a link to a react-router route
 * otherwise it'll render a link with an onclick
 */

 import React, { PropTypes } from 'react';

 import Helmet from 'react-helmet';

 import messages from './messages';

 import _ from 'underscore';


 import { FormattedMessage } from 'react-intl';
 import Button from 'components/widgets/Button';
 import H2 from 'components/widgets/H2';

 import styles from './styles.css';

 export class Calendar extends React.Component {

   constructor(props){
     super(props);
     this.state = {
       eventsSectionHeight: 0
     }
   }


   componentDidMount(){
     console.log("Here");
     setTimeout(() => {
       const width = $('#eventsSection').width();
       const height = $('#eventsSection').height();
       console.log(width, height);
       this.setState({eventsSectionWidth: width, eventsSectionHeight: height});
     });
   };

   isConflicting(eventA, eventB){
     return (eventA.start+ eventA.duration) > eventB.start;
   }

   intersectingEvents(r1, r2) {
      return !(r2.left > r1.right ||
               r2.right < r1.left ||
               r2.top > r1.bottom ||
               r2.bottom < r1.top);
    }

   allConflictingEvents(event, events){

     for(let i = 0; i < events.length; i++){
       const eventA = {
          left:   events[i].left,
          top:    events[i].top,
          right:  events[i].left+ 200,
          bottom: events[i].top + events[i].height
        };

        const eventB = {
          left:   event.left,
          top:    event.top,
          right:  event.left+ 200,
          bottom: event.top + event.height
        };
       if(this.intersectingEvents(eventA, eventB)){
         console.log("Intersecting: ", events[i], event, eventA, eventB);
         event.left = events[i].left + 210;
       }
     }
   }

   calculateConflictingEvents(){
     let events = this.props.events;
     events = _.sortBy(events, 'start');
     for(let i = 0; i< events.length; i++){
       events[i].top = events[i].start * (2000/540);
       events[i].height = events[i].duration * (2000/540),
       events[i].left = 15;
       this.allConflictingEvents(events[i], events.slice(0, _.indexOf(events, events[i])));
     }
     return events;
   }

   render() {
     let hours = [];
     let start = 0;
     let index = 0;
     let timeOfTheDay = 'AM'
     while(start <= this.props.endTime){
       let hour = 0 ;
       if(index > 4 && timeOfTheDay !== 'PM'){
         timeOfTheDay = 'PM';
         index = 1;

       }
       if(timeOfTheDay === 'AM'){
         hour = index + 8;
       }
       else{
         hour = index;
       }
       index ++ ;
       start = start + 60;
       //if(hour === 12){ timeOfTheDay = 'PM'; }
       hours.push({start: hour+ ':00 '+ timeOfTheDay, middle: hour+ ':30 '+ timeOfTheDay})
     }
     return (
       <div className={`container-fluid ${styles.dayViewMain}`} id = "dayView">
          <div className={`container-fluid ${styles.dayViewSkeleton}`}>
            <div className={`col-xs-12 ${styles.hourSection}`}>
              { hours.map(function (hour, i) {
                return <div key={i} className={`row ${styles.hourTitle}`}>
                    {hour.start}
                  </div>;
              })}
            </div>

          </div>
          <div className={`col-xs-10 ${styles.eventsSection}`} id = {`eventsSection`}>
            { this.calculateConflictingEvents(this.props.events).map(function (event, i) {
              return <div
                key={i}
                className={`row ${styles.eventEntry}`}
                style={{top: event.start * (2000/540),
                  height: event.duration * (2000/540),
                  left: event.left? event.left: 15,
                }}
                >
                  {event.title}
                </div>;
            })}
          </div>
       </div>
     );
   }
 }


Calendar.propTypes = {
  endTime: PropTypes.number,
};

export default Calendar;
