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
    <div className="container">
      <div className={`row ${styles.hourSection}`}>
        <div className="col-xs-2">.col-xs-2</div>
        <div className="col-xs-10">.col-xs-10</div>
      </div>
      <div className={`row ${styles.hourSection}`}>
        <div className="col-xs-2">.col-xs-2</div>
        <div className="col-xs-10">.col-xs-10</div>
      </div>
      <div className={`row ${styles.hourSection}`}>
        <div className="col-xs-2">.col-xs-2</div>
        <div className="col-xs-10">.col-xs-10</div>
      </div>
      <div className={`row ${styles.hourSection}`}>
        <div className="col-xs-2">.col-xs-2</div>
        <div className="col-xs-10">.col-xs-10</div>
      </div>
      <div className={`row ${styles.hourSection}`}>
        <div className="col-xs-2">.col-xs-2</div>
        <div className="col-xs-10">.col-xs-10</div>
      </div>
      <div className={`row ${styles.hourSection}`}>
        <div className="col-xs-2">.col-xs-2</div>
        <div className="col-xs-10">.col-xs-10</div>
      </div>
      <div className={`row ${styles.hourSection}`}>
        <div className="col-xs-2">.col-xs-2</div>
        <div className="col-xs-10">.col-xs-10</div>
      </div>
      <div className={`row ${styles.hourSection}`}>
        <div className="col-xs-2">.col-xs-2</div>
        <div className="col-xs-10">.col-xs-10</div>
      </div>
      <div className={`row ${styles.hourSection}`}>
        <div className="col-xs-2">.col-xs-2</div>
        <div className="col-xs-10">.col-xs-10</div>
      </div>
    </div>
  );
}

Calendar.propTypes = {

};

export default Calendar;
