/**
 *
 * Home.react.js
 *
 * A common button, if you pass it a prop "route" it'll render a link to a react-router route
 * otherwise it'll render a link with an onclick
 */

 import React from 'react';
 import Helmet from 'react-helmet';

 import messages from './messages';


 import { FormattedMessage } from 'react-intl';
 import Button from 'components/widgets/Button';
 import H2 from 'components/widgets/H2';

 import styles from './styles.css';

function Calendar(props) {


  return (
    <div className="container-fluid">
      <div className={`row ${styles.hourSection}`}>
        <div className="col-xs-1 container">
          <div className="row">8:00 AM</div>
          <div className="row">8:30 AM</div>
        </div>
        <div className={`col-xs-11 ${styles.hourLine}`}>
          .col-xs-11
        </div>
      </div>
      <div className={`row ${styles.hourSection}`}>
      <div className="col-xs-1 container">
        <div className="row">9:00 AM</div>
        <div className="row">9:30 AM</div>
      </div>
        <div className={`col-xs-11 ${styles.hourLine}`}>
          .col-xs-11
        </div>
      </div>
      <div className={`row ${styles.hourSection}`}>
        <div className="col-xs-1 container">
          <div className="row">10:00 AM</div>
          <div className="row">10:30 AM</div>
        </div>
        <div className={`col-xs-11 ${styles.hourLine}`}>
          .col-xs-11
        </div>
      </div>
      <div className={`row ${styles.hourSection}`}>
        <div className="col-xs-1 container">
          <div className="row">11:00 AM</div>
          <div className="row">11:30 AM</div>
        </div>
        <div className={`col-xs-11 ${styles.hourLine}`}>
          .col-xs-11
        </div>
      </div>
      <div className={`row ${styles.hourSection}`}>
        <div className="col-xs-1 container">
          <div className="row">12:00 AM</div>
          <div className="row">12:30 AM</div>
        </div>
        <div className={`col-xs-11 ${styles.hourLine}`}>
          .col-xs-11
        </div>
      </div>
    </div>
  );
}

Calendar.propTypes = {

};

export default Calendar;
