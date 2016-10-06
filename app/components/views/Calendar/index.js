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

   componentDidMount(){
      console.log("I am loaded", $('#dayView').offset(), $('#dayView').height(), $('#dayView').width())
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
     console.log("hours: ", hours);
     return (
       <div className="container-fluid" id = "dayView">
       { hours.map(function (hour, i) {
         return <div className={`row ${styles.hourSection}`} key={i}>
             <div className={`row ${styles.hourHalfSection} `}>
               <div className={`col-xs-1`}>
                 {hour.start}
               </div>
               <div className={`col-xs-11`}>
                 .col-xs-11
               </div>
             </div>
             <div className={`row ${styles.hourHalfSection} ${styles.dottedBorderTop} ${styles.solidBorderBottom}`}>
               <div className={`col-xs-1`}>
                 {hour.middle}
               </div>
               <div className={`col-xs-11`}>
                 .col-xs-11
               </div>
             </div>
           </div>;
         })}
       </div>
     );
   }
 }


Calendar.propTypes = {
  endTime: PropTypes.number,
};

export default Calendar;
