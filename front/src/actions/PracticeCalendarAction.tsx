// import axios from 'axios' // API取得用
import actionCreatorFactory from 'typescript-fsa';
import { PracticeCalendarState } from '../types/PracticeCalendarState';
import moment from 'moment';

const actionCreator = actionCreatorFactory();

export const openEditCalendar = actionCreator<moment.Moment | null>('OPEN_EDIT_CALENDAR');
export const closeEditCalendar = actionCreator<PracticeCalendarState>('CLOSE_EDIT_CALENDAR');
export const changeFocused = actionCreator<PracticeCalendarState>('CHANGE_FOCUSED');