import { combineReducers } from 'redux';
import PracticeCalendarReducer from './PracticeCalendarReducer';
import PracticeScheduleReducer from './PracticeScheduleReducer'
import PracticeCalendarMobileReducer from './PracticeCalendarMobileReducer'

const reducer = combineReducers({
  PracticeCalendarReducer: PracticeCalendarReducer,
  PracticeScheduleReducer: PracticeScheduleReducer,
  PracticeCalendarMobileReducer: PracticeCalendarMobileReducer,
});

export default reducer;