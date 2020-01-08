import { PracticeCalendarMobileState } from '../types/PracticeCalendarMobileState';
import { reducerWithInitialState } from 'typescript-fsa-reducers';

import { openEditCalendarMobile, closeEditCalendarMobile, changeFocused } from '../actions/PracticeCalendarMobileAction';
import moment from 'moment';

const initialState: PracticeCalendarMobileState = {
  isOpen: false,
  date: moment(),
  focused: false,
}

export const PracticeCalendarMobileReducer = reducerWithInitialState(initialState)
  .case(openEditCalendarMobile, (state, payload) => ({
    ...state,
    isOpen: true,
    date: payload,
    focused: true,
  }))
  .case(closeEditCalendarMobile, (state) => ({
    ...state,
    isOpen: false,
    focused: false,
  }))
  .case(changeFocused, (state) => ({
    ...state,
    focused: true,
  }))

export default PracticeCalendarMobileReducer;
