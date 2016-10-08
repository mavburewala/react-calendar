import React from 'react';

import styles from './styles.css';

function Event(props) {
  return (
    <div
    key={i}
    className={`row ${styles.eventEntry}`}
    style={{top: props.eventData.top,
      height: props.eventData.height,
      left: props.eventData.left,
    }}
    >
      {props.eventData.title}
    </div>
  );
}

Calendar.propTypes = {
  eventData: React.PropTypes.object,
};

export default Event;
