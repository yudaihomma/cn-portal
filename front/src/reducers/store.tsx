import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
// import PracticeCalendarReducer from './PracticeCalendarReducer';
import {PracticeScheduleReducer} from './PracticeScheduleReducer'
import {PracticeScheduleState} from '../types/PracticeScheduleState'
import {PracticeCalendarMobileReducer } from './PracticeCalendarMobileReducer'
import {PracticeCalendarMobileState} from '../types/PracticeCalendarMobileState'

// Redux-Thunk関連（非同期データ取得用）
import thunk from 'redux-thunk'

export type RootState = {
  practiceCalendarMobile: PracticeCalendarMobileState;
  practiceSchedule: PracticeScheduleState;
};

export const store = createStore(
  combineReducers({
    // PracticeCalendarReducer: PracticeCalendarReducer,
    practiceSchedule: PracticeScheduleReducer,
    practiceCalendarMobile: PracticeCalendarMobileReducer
  }),
  compose(
    applyMiddleware(thunk),
  )
);

// const store = createStore(
//   stores,
//   composeEnhancers(
//     applyMiddleware(thunk),
//   )
// );

export type State = ReturnType<typeof store.getState>;