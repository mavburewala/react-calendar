/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';

const selectCalendar = () => (state) => state.get('calendar');


export {
  selectCalendar,
};
