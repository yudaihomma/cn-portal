// 個人練習予定の型
export type PracticeScheduleState = {
    email: string,
    practice_day: string[],
    practice_attend: PracticeAttend[],
}

// 練習予定個別
export type PracticeAttend = {
    practice_day: string,
    branch: string,
    attend_time: string,
    status: string,
}

export type SearchPracticeMonth = {
    month: string,
}