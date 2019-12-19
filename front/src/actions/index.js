import * as actionTypes from '../utils/actionTypes';
import axios from 'axios' // API取得用

// Notification操作
export const openEditCalendarMobile = (date) => ({
  type: actionTypes.OPEN_EDIT_CALENDAR_MOBILE,
  isOpen: true,
  date: date,
});

export const closeEditCalendarMobile = (variant, message) => ({
  type: actionTypes.CLOSE_EDIT_CALENDAR_MOBILE,
  isOpen: false,
});

export const changeFocus = () => ({
  type: actionTypes.OPEN_EDIT_CALENDAR_MOBILE,
  focused: true,
});
