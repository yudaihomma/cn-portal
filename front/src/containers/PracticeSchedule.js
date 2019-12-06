import React, { useState } from 'react';
import PropTypes from 'prop-types';

import mockdata from './mockdata.json';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { DayPickerRangeController } from 'react-dates';

import { withStyles } from '@material-ui/core/styles';
import Badge from '@material-ui/core/Badge';
import Chip from '@material-ui/core/Chip';

import MediaQuery from "react-responsive";

import moment from 'moment';
moment.locale('ja');

// スタイル
const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    margin: 10,
    whiteSpace: 'pre-line',
  },
});

class PracticeSchedule extends React.Component {

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
    if (mockdata.practice_attend.some(pa => pa.practice_day === momentDate.format('D'))) {
      return (
        <div>
          <div style={{position:"absolute", top:"3px", left: 0, right: 0,}}>
          {momentDate.format('D')}
          </div>
          <div style={{position:"absolute", bottom:"1px", left: 0, right: 0,}}>
            <Badge color="primary" variant="dot"></Badge>
          </div>
        </div>
      )
    }
    return (
      <div style={{position:"absolute", top:"3px", left: 0, right: 0,}}>
        {momentDate.format('D')}
      </div>
    )
  }

  // 出席状況を描画(PC)
  isDayCustom = momentDate => {
    if (mockdata.practice_attend.some(pa => pa.practice_day === momentDate.format('D'))) {

      const handleClick = () => {
        console.info('You clicked the Chip.');
      };

      const attend_times = mockdata.practice_attend.filter(pa => pa.practice_day === momentDate.format('D')).map(pd => pd.attend_times[0])

      return (
        <div>
          <div style={{position:"absolute", top:"3px", left: 0, right: 0,}}>
          {momentDate.format('D')}
          </div>
          <div>
          <Chip
            size="small"
            label={attend_times}
            onClick={handleClick}
            color="primary"
          />
          </div>
        </div>
      )
    }
    return (
      <div style={{position:"absolute", top:"3px", left: 0, right: 0,}}>
        {momentDate.format('D')}
      </div>
    )
  }


  render() {
    // Material-ui関連
    const { classes } = this.props;

    return (
      <div className={classes.root}>
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
            daySize={110}
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

// const mapState = (state, ownProps) => ({
// });
// function mapDispatch(dispatch) {
//   return {
//     actions: bindActionCreators(actions, dispatch),
//   };
// }

// // Material-uiのテーマ設定＋Redux設定
// export default connect(mapState, mapDispatch)(
//   withStyles(useStyles(), { withTheme: true })(PracticeSchedule)
// );

// Material-ui関連
PracticeSchedule.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

// export default PracticeSchedule
export default withStyles(styles, { withTheme: true })(PracticeSchedule);