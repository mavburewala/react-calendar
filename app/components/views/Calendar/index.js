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
     console.log("this.state: ", this.state);
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
            { this.props.events.map(function (event, i) {
              return <div
                key={i}
                className={`${styles.eventEntry}`}
                style={{top: event.start * (2000/540), height: event.duration * (2000/540), width: 610}}
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
