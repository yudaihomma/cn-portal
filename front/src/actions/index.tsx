// import axios from 'axios' // API取得用
import actionCreatorFactory from 'typescript-fsa';
import { PracticeCalendarMobileState } from '../utils/types';

const actionCreator = actionCreatorFactory();

export const openEditCalendarMobile = actionCreator<PracticeCalendarMobileState>('OPEN_EDIT_CALENDAR_MOBILE');
export const closeEditCalendarMobile = actionCreator<PracticeCalendarMobileState>('CLOSE_EDIT_CALENDAR_MOBILE');
