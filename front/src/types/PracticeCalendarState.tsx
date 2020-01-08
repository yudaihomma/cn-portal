import moment from 'moment'

// 練習カレンダー(mobile)のウィンドウ開閉
export type PracticeCalendarState = {
    isOpen: boolean,
    date: moment.Moment | null,
    focused: boolean,
}

