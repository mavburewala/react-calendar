/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import Helmet from 'react-helmet';

import { createStructuredSelector } from 'reselect';


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
    const endTime = 540;
    const events = [
        // `start` & `duration` are measured in minutes
        // `start: 0` is 8:00a
        {start: 0,  duration: 15, title: "Exercise"},
        {start: 25, duration: 30, title: "Travel to work"},
        {start: 30, duration: 30, title: "Plan day"},
        // {start: 35, duration: 60, title: "Plan day X"},
        {start: 60, duration: 15, title: "Review yesterday's commits"},
        // {start: 75, duration: 40, title: "Review yesterday's commits X"},
        {start: 100,  duration: 15, title: "Code review"},
        // {start: 105,  duration: 30, title: "Code review X"},
        {start: 180,  duration: 90, title: "Have lunch with John"},
        {start: 360,  duration: 30, title: "Skype call"},
        {start: 370,  duration: 45, title: "Follow up with designer"},
        {start: 405,  duration: 30, title: "Push up branch"},
      ];
    return (
      <Calendar endTime={endTime} events={events}></Calendar>
    );
  }
}

CalendarContainer.propTypes = {
  changeRoute: React.PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    changeRoute: (url) => dispatch(push(url)),
    dispatch,
  };
}

const mapStateToProps = createStructuredSelector({
});

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(CalendarContainer);
