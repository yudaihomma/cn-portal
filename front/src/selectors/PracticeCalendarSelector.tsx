import { createSelector } from 'reselect';
import { State }  from '../reducers/store';
import { PracticeCalendarState } from '../types/PracticeCalendarState';

export const GetPracticeCalendarState = createSelector(
  (state: State) => state.practiceCalendar,
  (state: PracticeCalendarState) => state
);