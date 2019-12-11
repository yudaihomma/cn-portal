import * as actionTypes from '../utils/actionTypes';

const initialState = {
  isFetching: false,
  items: []
};

const PracticeScheduleReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_PRACTICE_REQUEST:
      return {
        ...state,
        isFetching: true,
        items: [],
      };
    case actionTypes.GET_PRACTICE_SUCCESS:
      return {
        ...state,
        isFetching: false,
        items: action.items,
      };
    case actionTypes.GET_PRACTICE_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default PracticeScheduleReducer;