import * as actionTypes from '../utils/actionTypes';
import axios from 'axios' // API取得用

// Notification操作
export const setNotification = (variant, message) => ({
    type: actionTypes.SET_NOTIFICATION,
    variant: variant,
    message: message,
  });
  export const closeNotification = (variant, message) => ({
    type: actionTypes.CLOSE_NOTIFICATION,
  });
