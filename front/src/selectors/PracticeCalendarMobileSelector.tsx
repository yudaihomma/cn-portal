import { createSelector } from 'reselect';
import { State }  from '../reducers/store';
import { PracticeCalendarMobileState } from '../utils/types';


export const GetPracticeCalendarMobileState = createSelector(
  (state: State) => state.PracticeCalendarMobileReducer,
  (state: PracticeCalendarMobileState) => state
);