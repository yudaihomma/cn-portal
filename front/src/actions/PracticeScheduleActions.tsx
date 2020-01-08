// import axios from 'axios' // API取得用
import actionCreatorFactory from 'typescript-fsa';
import { PracticeScheduleState } from '../types/PracticeScheduleState';

const actionCreator = actionCreatorFactory();

// export const getPracticeDays = actionCreator.async<{},PracticeScheduleState>('GET_PRACTICE_DAYS');
export const getPracticeDaysMock = actionCreator<PracticeScheduleState>('GET_PRACTICE_DAYS_MOCK');
