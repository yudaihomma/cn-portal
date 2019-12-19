import * as actionTypes from '../utils/actionTypes';

const initialState = {
  isOpen: false,
  date: '',
};

const PracticeCalendarMobileReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.OPEN_EDIT_CALENDAR_MOBILE:
      return {
        ...state,
        isOpen: true,
        date: action.date,
      };
    case actionTypes.CLOSE_EDIT_CALENDAR_MOBILE:
      return {
        ...state,
        isOpen: false,
      };
    default:
      return state;
  }
};

export default PracticeCalendarMobileReducer;