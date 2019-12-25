import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
// import PracticeCalendarReducer from './PracticeCalendarReducer';
// import PracticeScheduleReducer from './PracticeScheduleReducer'
import {PracticeCalendarMobileReducer } from './PracticeCalendarMobileReducer'

// Redux-Thunk関連（非同期データ取得用）
import thunk from 'redux-thunk'


export const store = createStore(
  combineReducers({
    // PracticeCalendarReducer: PracticeCalendarReducer,
    // PracticeScheduleReducer: PracticeScheduleReducer,
    PracticeCalendarMobileReducer
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