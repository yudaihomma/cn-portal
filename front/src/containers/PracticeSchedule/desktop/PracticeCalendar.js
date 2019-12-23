

import React, { useState } from 'react';
import PropTypes from 'prop-types';

import mockdata from '../../mockdata.json';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { DayPickerSingleDateController } from 'react-dates';

import { withStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../../actions';

import CalendarDay from '../../../components/CalendarDay';

import moment from 'moment';
moment.locale('ja');


// スタイル
const styles = theme => ({
    labels: {
      fontSize: "12px",
      height: "20px",
      pointerEvents: "none",
      borderRadius: "8px",
    },
    customBadge: {
      backgroundColor: "#c1c1c1",
    }
  });

class PracticeCalendar extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      date: '',
    };
  }

  // 練習日ではない日をdisabled
  isDayBlocked = momentDate => {
    if (mockdata.practice_day.indexOf(momentDate.format('D')) < 0) return true
    return false
  }

  // 出席状況を描画(PC)
  isDayCustom = momentDate => {
    let isPractice
    const { classes } = this.props;
    let chips = []

    if (mockdata.practice_attend.some(pa => pa.practice_day === momentDate.format('D'))) {
      isPractice = true
    } else {
      isPractice = false
    }

    mockdata.practice_attend.filter(pa => pa.practice_day === momentDate.format('D')).forEach(at => {
      let color
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
        label={at.attend_time}
        color={color}
      />)
    });
    return (
      <CalendarDay
        momentDate={momentDate.format('D')}
        isPractice={isPractice}
        chips={chips}
      />)
    }

  render() {
    // Material-ui関連
    const { classes } = this.props;

    return (
      <DayPickerSingleDateController
        date={this.state.date}
        onDateChange={ date => this.setState({date: date})}
        focused={this.state.focused}
        onFocusChange={({ focused }) => this.setState({ focused })}
        numberOfMonths={1}
        daySize={95}
        isDayBlocked={this.isDayBlocked}
        renderDayContents={this.isDayCustom}
        monthFormat="YYYY[年]MM[月]"
        displayFormat='YYYY-MM-DD'
      />
    );
  }
}

const mapState = (state, ownProps) => ({
});
function mapDispatch(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch),
  };
}

// Material-uiのテーマ設定＋Redux設定
export default connect(mapState, mapDispatch)(
  withStyles(styles, { withTheme: true })(PracticeCalendar)
);


// Material-ui関連
PracticeCalendar.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};