import { createSelector } from 'reselect';
import { State }  from '../reducers/store';
import { PracticeCalendarMobileState } from '../types/PracticeCalendarMobileState';

export const GetPracticeCalendarMobileState = createSelector(
  (state: State) => state.practiceCalendarMobile,
  (state: PracticeCalendarMobileState) => state
);