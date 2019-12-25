import React, { useState } from 'react';
import PropTypes from 'prop-types';

import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

import { withStyles } from '@material-ui/core/styles';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions';

import MediaQuery from "react-responsive";

import PracticeCalendar from './desktop/PracticeCalendar'
import {PracticeCalendarMobile} from './mobile/PracticeCalendarMobile'

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

  render() {
    // Material-ui関連
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <MediaQuery query="(max-width: 767px)">
          <PracticeCalendarMobile/>
        </MediaQuery>
        <MediaQuery query="(min-width: 767px)">
          <PracticeCalendar/>
        </MediaQuery>
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
