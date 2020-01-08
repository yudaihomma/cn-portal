import { createSelector } from 'reselect';
import { State }  from '../reducers/store';
import { PracticeScheduleState } from '../types/PracticeScheduleState';

export const GetPracticeScheduleState = createSelector(
  (state: State) => state.practiceSchedule,
  (state: PracticeScheduleState) => state
);