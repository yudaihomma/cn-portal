import moment from 'moment'

// Cardの型
export type PracticeCalendarMobileState = {
    isOpen: boolean,
    date: moment.Moment | null,
    focused: boolean,
}

// CardListの型
export type CardListState = {
}