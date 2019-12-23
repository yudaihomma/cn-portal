import React from 'react';
import PropTypes from 'prop-types';

import mockdata from '../../mockdata.json';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { DayPickerSingleDateController } from 'react-dates';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../../actions';

import CalendarDayMobile from '../../../components/CalendarDayMobile';
import EditCalendarMobile from './EditCalendarMobile';

import moment from 'moment';
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

const PracticeCalendarMobile:React.FC = () => {

  // 練習日ではない日をdisabled
  const isDayBlocked = (momentDate: moment.Moment) => {
    if (mockdata.practice_day.indexOf(momentDate.format('D')) < 0) return true
    return false
  }

  // 出席状況を描画(モバイル)
  const isDayCustomMobile = (momentDate: moment.Moment)  => {
    const classes = useStyles();
    let isPractice
    let color: 'primary' | 'secondary' | 'default' | 'error' = "default"
    let badgeClass

    if (mockdata.practice_attend.some((pa: mockdata.practice_attend) => pa.practice_day === momentDate.format('D'))) {
      isPractice = true
    } else {
      isPractice = false
    }

    if (mockdata.practice_attend
        .filter((pa: mockdata.practice_attend) => pa.practice_day === momentDate.format('D'))
        .some((pa: mockdata.practice_attend) => pa.status === "1")) {
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
  // redux用
  const { PracticeCalendarMobileReducer, actions } = this.props;
  // Material-ui関連
  const { classes } = this.props;

  return (
    <div>
      <DayPickerSingleDateController
        date={PracticeCalendarMobileReducer.date}
        onDateChange={actions.openEditCalendarMobile}
        numberOfMonths={1}
        daySize={40}
        isDayBlocked={isDayBlocked}
        renderDayContents={isDayCustomMobile}
        monthFormat="YYYY[年]MM[月]"
        displayFormat='YYYY-MM-DD'
      />
      <EditCalendarMobile />
    </div>
  );
}

const mapState = (state, ownProps) => ({
  PracticeCalendarMobileReducer: state.PracticeCalendarMobileReducer,
});

function mapDispatch(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch),
  };
}

// Material-uiのテーマ設定＋Redux設定
export default connect(mapState, mapDispatch)(
  withStyles(styles, { withTheme: true })(PracticeCalendarMobile)
);


// Material-ui関連
PracticeCalendarMobile.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};