// import axios from 'axios' // API取得用
import actionCreatorFactory from 'typescript-fsa';
import { PracticeCalendarMobileState } from '../types/PracticeCalendarMobileState';
import moment from 'moment';

import { PracticeScheduleState } from '../types/PracticeScheduleState';

const actionCreator = actionCreatorFactory();

// export const getPracticeDays = actionCreator.async<{},PracticeScheduleState>('GET_PRACTICE_DAYS');
export const getPracticeDaysMock = actionCreator<PracticeScheduleState>('GET_PRACTICE_DAYS_MOCK');

export const openEditCalendarMobile = actionCreator<moment.Moment | null>('OPEN_EDIT_CALENDAR_MOBILE');
export const closeEditCalendarMobile = actionCreator<PracticeCalendarMobileState>('CLOSE_EDIT_CALENDAR_MOBILE');
export const changeFocused = actionCreator<PracticeCalendarMobileState>('CHANGE_FOCUSED');
