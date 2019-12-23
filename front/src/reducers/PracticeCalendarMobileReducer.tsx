import { Reducer } from 'redux';
import { isType } from 'typescript-fsa';
import { produce } from 'immer';

import { openEditCalendarMobile, closeEditCalendarMobile } from '../actions';

type PracticeCalendarMobile = {
  isOpen: boolean,
  date: object,
}

const initialState: PracticeCalendarMobile[] = [];

export const PracticeCalendarMobileReducer: Reducer<PracticeCalendarMobile[]> = (state = initialState, action) => {
  if (isType(action, openEditCalendarMobile)) {
    return produce(state, draft => {
      draft.push({ isOpen: true, date: action.payload.date });
    });
  }
  if (isType(action, closeEditCalendarMobile)) {
    return produce(state, draft => {
      draft.push({ isOpen: false, date: action.payload.date });
    })
  }
  return state;
};

export default PracticeCalendarMobileReducer;
