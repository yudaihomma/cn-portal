import { PracticeScheduleState } from '../types/PracticeScheduleState';
import { reducerWithInitialState } from 'typescript-fsa-reducers';

import { getPracticeDaysMock } from '../actions/PracticeScheduleActions';

import mockdata from '../utils/mockdata.json'

const initialState: PracticeScheduleState = {
  email: mockdata.email,
  practice_day: mockdata.practice_day,
  practice_attend: mockdata.practice_attend,
    // email: '',
    // practice_day: [],
    // practice_attend: [],
}

export const PracticeScheduleReducer = reducerWithInitialState(initialState)
  .case(getPracticeDaysMock, (state) => ({
    ...state,
    // email: mockdata.email,
    // practice_day: mockdata.practice_day,
    // practice_attend: mockdata.practice_attend,
    // email: '',
    // practice_day: [],
    // practice_attend: [],
  }))

export default PracticeScheduleReducer;
