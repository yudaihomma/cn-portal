

import React, { useState } from 'react';
import PropTypes from 'prop-types';

import mockdata from './mockdata.json';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { DayPickerRangeController } from 'react-dates';

import { withStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import MediaQuery from "react-responsive";

import {CalendarDay, CalendarDayMobile} from '../components/CalendarDay';

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
    super(props);

    this.state = {
      date: ''
    };
  }


  // 練習日ではない日をdisabled
  isDayBlocked = momentDate => {
    if (mockdata.practice_day.indexOf(momentDate.format('D')) < 0) return true
    return false
  }

  // 出席状況を描画(モバイル)
  isDayCustomMobile = momentDate => {
    const { classes } = this.props;
    let isPractice
    let color
    let badgeClass

    if (mockdata.practice_attend.some(pa => pa.practice_day === momentDate.format('D'))) {
      isPractice = true
    } else {
      isPractice = false
    }

    if (mockdata.practice_attend.filter(pa => pa.practice_day === momentDate.format('D')).some(pa => pa.status === "1")) {
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
      <div>
        <MediaQuery query="(max-width: 767px)">
        <DayPickerRangeController
          date={this.state.date}
          onDateChange={date => this.setState({date: date})}
          focused={this.state.focused}
          onFocusChange={({ focused }) => this.setState({ focused })}
          numberOfMonths={1}
          daySize={40}
          isDayBlocked={this.isDayBlocked}
          renderDayContents={this.isDayCustomMobile}
          monthFormat="YYYY[年]MM[月]"
          displayFormat='YYYY-MM-DD'
        />
        </MediaQuery>
        <MediaQuery query="(min-width: 767px)">
          <DayPickerRangeController
            date={this.state.date}
            onDateChange={date => this.setState({date: date})}
            focused={this.state.focused}
            onFocusChange={({ focused }) => this.setState({ focused })}
            numberOfMonths={1}
            daySize={95}
            isDayBlocked={this.isDayBlocked}
            renderDayContents={this.isDayCustom}
            monthFormat="YYYY[年]MM[月]"
            displayFormat='YYYY-MM-DD'
          />
        </MediaQuery>
      </div>
    );
  }
}


  // Material-ui関連
  PracticeCalendar.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
  };

  // export default PracticeSchedule
  export default withStyles(styles, { withTheme: true })(PracticeCalendar);