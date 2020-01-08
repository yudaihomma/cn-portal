import React from 'react';

import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';

import { useDispatch, useSelector } from 'react-redux';

import { GetPracticeScheduleState } from '../../selectors/PracticeScheduleSelector';

// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import {getPracticeDaysMock} from '../../actions/PracticeScheduleActions';

import MediaQuery from "react-responsive";

import PracticeCalendar from './desktop/PracticeCalendar'
import {PracticeCalendarMobile} from './mobile/PracticeCalendarMobile'

import moment from 'moment';
moment.locale('ja');

// スタイル
const useStyles = makeStyles((theme: Theme) =>
 createStyles({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    margin: 10,
    whiteSpace: 'pre-line',
  },
  labels: {
    fontSize: "12px",
    height: "20px"
  }
}));

export const PracticeSchedule: React.FC = () => {

  // Material-ui関連
  const classes = useStyles();

  // const dispatch = useDispatch();
  const state = useSelector(GetPracticeScheduleState);

  const dispatch = useDispatch()
  dispatch(getPracticeDaysMock)

  return (
    <div className={classes.root}>
      <MediaQuery query="(max-width: 767px)">
        <PracticeCalendarMobile
        practiceData={state}/>
      </MediaQuery>
      <MediaQuery query="(min-width: 767px)">
        <PracticeCalendar/>
      </MediaQuery>
    </div>
  );
}
