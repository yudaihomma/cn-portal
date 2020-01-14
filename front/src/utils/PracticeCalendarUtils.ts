import {PracticeAttend} from '../types/PracticeScheduleState'

export function attendShaping(attend: PracticeAttend): string {
    if (attend.attend_start == attend.attend_end){
        return String(attend.attend_start) + ":00"
    }
    return String(attend.attend_start) + ":00-" + String(attend.attend_end) + ":00"
}