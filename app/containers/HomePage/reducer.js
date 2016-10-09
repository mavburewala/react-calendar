/*
 * HomeReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */

import { fromJS } from 'immutable';

// The initial state of the App
const initialState = fromJS({
  endTime: 540,
  events: [
      // `start` & `duration` are measured in minutes
      // `start: 0` is 8:00a
      { start: 0, duration: 15, title: 'Exercise' },
      { start: 25, duration: 30, title: 'Travel to work' },
      { start: 30, duration: 30, title: 'Plan day' },
      { start: 60, duration: 15, title: 'Review yesterdays commits' },
      { start: 75, duration: 40, title: 'Review yesterdays commits X' },
      { start: 100, duration: 15, title: 'Code review' },
      { start: 180, duration: 90, title: 'Have lunch with John' },
      { start: 360, duration: 30, title: 'Skype call' },
      { start: 370, duration: 45, title: 'Follow up with designer' },
      { start: 405, duration: 30, title: 'Push up branch' },
  ],
});

function homeReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default homeReducer;
