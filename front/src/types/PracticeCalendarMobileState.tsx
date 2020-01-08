import moment from 'moment'

// 練習カレンダー(mobile)のウィンドウ開閉
export type PracticeCalendarMobileState = {
    isOpen: boolean,
    date: moment.Moment | null,
    focused: boolean,
}

