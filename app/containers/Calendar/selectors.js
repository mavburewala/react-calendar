/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';

const selectHome = () => (state) => state.get('home');

const selectEvents = () => createSelector(
  selectHome(),
  (homeState) => homeState.get('events').toJS()
);

const selectTotalTime = () => createSelector(
  selectHome(),
  (homeState) => homeState.get('endTime')
);

export {
  selectEvents,
  selectTotalTime,
};
