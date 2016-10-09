/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import { createStructuredSelector } from 'reselect';

import {selectEvents, selectTotalTime} from './selectors';


import Calendar from 'components/views/Calendar';

export class CalendarContainer extends React.Component {

  /**
   * Changes the route
   *
   * @param  {string} route The route we want to go to
   */
  openRoute = (route) => {
    this.props.changeRoute(route);
  };


  render() {
    return (
      <Calendar endTime={this.props.endTime} events={this.props.events}></Calendar>
    );
  }
}

CalendarContainer.propTypes = {
  changeRoute: React.PropTypes.func,
  events: React.PropTypes.array,
  endTime: React.PropTypes.number,
};

export function mapDispatchToProps(dispatch) {
  return {
    changeRoute: (url) => dispatch(push(url)),
    dispatch,
  };
}

const mapStateToProps = createStructuredSelector({
  events: selectEvents(),
  endTime: selectTotalTime(),
});

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(CalendarContainer);
