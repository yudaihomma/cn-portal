import React from 'react';
import PropTypes from 'prop-types';

import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';

import { useDispatch, useSelector } from 'react-redux';
import { closeEditCalendarMobile } from '../../../actions';

import {GetPracticeCalendarMobileState} from '../../../selectors/PracticeCalendarMobileSelector'

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

  const state = useSelector(GetPracticeCalendarMobileState);

  const classes = useStyles();

  let stringDate
  if (state.date) {
    stringDate = state.date.format("YYYY/MM/DD")
  }

  return (
    <EditCalendarDialogMobile
      classes={classes}
      isOpen={state.isOpen}
      onClose={() => dispatch(closeEditCalendarMobile(state))}
      date={stringDate}
  />
  );
}



EditCalendarMobile.propTypes = {
  date: PropTypes.object.isRequired,
  isOpen: PropTypes.bool.isRequired,
  classes: PropTypes.object,
};

