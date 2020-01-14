

import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';

import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { DayPickerSingleDateController } from 'react-dates';

import Chip from '@material-ui/core/Chip';

import { useDispatch, useSelector } from 'react-redux';
import { openEditCalendar , changeFocused } from '../../../actions/PracticeCalendarAction';
import {GetPracticeCalendarState} from '../../../selectors/PracticeCalendarSelector'

import {PracticeScheduleState} from '../../../types/PracticeScheduleState'

import CalendarDay from '../../../components/CalendarDay';

import {attendShaping} from '../../../utils/PracticeCalendarUtils'

import moment from 'moment';
moment.locale('ja');

// スタイル
const useStyles = makeStyles(() =>
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
}));

interface PracticeCalendarProps {
  practiceData: PracticeScheduleState,
};

type Props = PracticeCalendarProps

export const PracticeCalendar: React.FC<Props> = (props: Props) => {
  const dispatch = useDispatch();
  const state = useSelector(GetPracticeCalendarState);

  const {practiceData} = props;

  const classes = useStyles();

  // 練習日ではない日をdisabled
  const isDayBlocked = (momentDate: moment.Moment) => {
    if (practiceData.practice_day.indexOf(momentDate.format('D')) < 0) return true
    return false
  }

  // 出席状況を描画(PC)
  const isDayCustom = (momentDate: moment.Moment) => {
    let isPractice
    let chips: any = []

    if (practiceData.practice_attend.some(pa => pa.practice_day === momentDate.format('D'))) {
      isPractice = true
    } else {
      isPractice = false
    }

    practiceData.practice_attend.filter(pa => pa.practice_day === momentDate.format('D')).forEach(at => {
      let color: "inherit" | "primary" | "secondary" | "default"
      if (at.status === "1") {
        color = "primary"
      }
      else {
        color = "default"
      }

      chips.push(
      <Chip
        className={classes.labels}
        size="small"
        label={attendShaping(at)}
        color={color}
      />)
    });
    return (
      <CalendarDay
        momentDate={momentDate.format('D')}
        isPractice={isPractice}
        chips={chips}
        clickEvent={() => console.log("debug")}
      />)
    }

  return (
    <DayPickerSingleDateController
      date={state.date}
      onDateChange={(date) => dispatch(openEditCalendar(date))}
      focused={state.focused}
      onFocusChange={() => dispatch(changeFocused)}
      numberOfMonths={1}
      daySize={95}
      isDayBlocked={isDayBlocked}
      renderDayContents={isDayCustom}
      monthFormat="YYYY[年]MM[月]"
      // displayFormat='YYYY-MM-DD'
    />
  );
}