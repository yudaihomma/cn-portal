import { PracticeCalendarState } from '../types/PracticeCalendarState';
import { reducerWithInitialState } from 'typescript-fsa-reducers';

import { openEditCalendar, closeEditCalendar, changeFocused } from '../actions/PracticeCalendarAction';
import moment from 'moment';

const initialState: PracticeCalendarState = {
  isOpen: false,
  date: moment(),
  focused: false,
}

export const PracticeCalendarReducer = reducerWithInitialState(initialState)
  .case(openEditCalendar, (state, payload) => ({
    ...state,
    isOpen: true,
    date: payload,
    focused: true,
  }))
  .case(closeEditCalendar, (state) => ({
    ...state,
    isOpen: false,
    focused: false,
  }))
  .case(changeFocused, (state) => ({
    ...state,
    focused: true,
  }))

export default PracticeCalendarReducer;
