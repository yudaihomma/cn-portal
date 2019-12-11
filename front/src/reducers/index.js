import { combineReducers } from 'redux';
import PracticeCalendarReducer from './PracticeCalendarReducer';
import PracticeScheduleReducer from './PracticeScheduleReducer'

const reducer = combineReducers({
  PracticeCalendarReducer: PracticeCalendarReducer,
  PracticeScheduleReducer: PracticeScheduleReducer,
});

export default reducer;