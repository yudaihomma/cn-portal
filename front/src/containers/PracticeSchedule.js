import React, { useState } from 'react';
import PropTypes from 'prop-types';

import mockdata from './mockdata.json';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { DayPickerRangeController } from 'react-dates';

import { withStyles } from '@material-ui/core/styles';
import Badge from '@material-ui/core/Badge';
import Chip from '@material-ui/core/Chip';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions';

import MediaQuery from "react-responsive";

import PracticeCalendar from './PracticeCalendar'

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
  labels: {
    fontSize: "12px",
    height: "20px"
  }
});

class PracticeSchedule extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      date: ''
    };
  }

  render() {
    // Material-ui関連
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <PracticeCalendar/>
      </div>
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
  withStyles(styles, { withTheme: true })(PracticeSchedule)
);

// Material-ui関連
PracticeSchedule.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};