import React from 'react';

import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';

import { useDispatch, useSelector } from 'react-redux';
import { closeEditCalendar } from '../../../actions/PracticeCalendarAction';

import {GetPracticeCalendarState} from '../../../selectors/PracticeCalendarSelector'
import {EditCalendarDialogMobile} from '../../../components/EditCalendarDialogMobile';

// スタイル
const useStyles = makeStyles((theme: Theme) =>
 createStyles({
  appBar: {
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));

export const EditCalendarMobile: React.FC = () =>  {

  const dispatch = useDispatch();

  const state = useSelector(GetPracticeCalendarState);

  const classes = useStyles();

  let stringDate
  if (state.date) {
    stringDate = state.date.format("YYYY/MM/DD")
  }

  return (
    <EditCalendarDialogMobile
      classes={classes}
      isOpen={state.isOpen}
      onClose={() => dispatch(closeEditCalendar(state))}
      date={stringDate}
  />
  );
}
