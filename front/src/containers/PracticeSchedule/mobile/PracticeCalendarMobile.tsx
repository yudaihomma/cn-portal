import React from 'react';

import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { DayPickerSingleDateController } from 'react-dates';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';

import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { openEditCalendar , changeFocused } from '../../../actions/PracticeCalendarAction';
import {GetPracticeCalendarState} from '../../../selectors/PracticeCalendarSelector'

import CalendarDayMobile from '../../../components/CalendarDayMobile';
import {EditCalendarMobile} from './EditCalendarMobile';

// import { getPracticeDaysMock } from '../../../actions/PracticeScheduleActions';
import {PracticeScheduleState} from '../../../types/PracticeScheduleState'
// import { GetPracticeScheduleState } from '../../../selectors/PracticeScheduleSelector';
moment.locale('ja');

// スタイル
const useStyles = makeStyles((theme: Theme) =>
 createStyles({
    labels: {
      fontSize: "12px",
      height: "20px",
      pointerEvents: "none",
      borderRadius: "8px",
    },
    customBadge: {
      backgroundColor: "#c1c1c1",
    },
    appBar: {
      position: 'relative',
    },
    title: {
      marginLeft: theme.spacing(2),
      flex: 1,
    },
  }));

interface PracticeCalendarMobileProps {
    practiceData: PracticeScheduleState,
};

type Props = PracticeCalendarMobileProps

export const PracticeCalendarMobile: React.FC<Props> = (props: Props) => {
  const dispatch = useDispatch();
  const state = useSelector(GetPracticeCalendarState);

  const {practiceData} = props;

  const classes = useStyles();

  // 練習日ではない日をdisabled
  const isDayBlocked = (momentDate: moment.Moment) => {
    if (practiceData.practice_day.indexOf(momentDate.format('D')) < 0) return true
    return false
  }

  // 出席状況を描画(モバイル)
  const isDayCustomMobile = (momentDate: moment.Moment)  => {
    let isPractice
    let color: 'primary' | 'secondary' | 'default' | 'error' = "default"
    let badgeClass

    if (practiceData.practice_attend.some(pa => pa.practice_day === momentDate.format('D'))) {
      isPractice = true
    } else {
      isPractice = false
    }

    if (practiceData.practice_attend
        .filter(pa => pa.practice_day === momentDate.format('D'))
        .some(pa => pa.status === "1")) {
      color = "primary"
    } else {
      badgeClass = classes.customBadge
    }
    return (
      <CalendarDayMobile
      momentDate={momentDate.format('D')}
      isPractice={isPractice}
      color={color}
      classes={{badge: badgeClass}}
      />)
  }

  return (
    <div>
      <DayPickerSingleDateController
        date={state.date}
        onDateChange={(date) => dispatch(openEditCalendar(date))}
        numberOfMonths={1}
        daySize={40}
        isDayBlocked={isDayBlocked}
        renderDayContents={isDayCustomMobile}
        monthFormat="YYYY[年]MM[月]"
        // displayFormat='YYYY-MM-DD'
        focused={state.focused}
        onFocusChange={() => dispatch(changeFocused)}
      />
      <EditCalendarMobile />
    </div>
  );
}
