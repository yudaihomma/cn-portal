import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../../actions';

import EditCalendarDialogMobile from '../../../components/EditCalendarDialogMobile';

// スタイル
const styles = theme => ({
  appBar: {
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
});

class EditCalendarMobile extends React.Component {

  render() {
    // redux用
    const { PracticeCalendarMobileReducer, actions } = this.props;
    // Material-ui関連
    const { classes } = this.props;

    let stringDate
    if (PracticeCalendarMobileReducer.date != "") {
      stringDate = PracticeCalendarMobileReducer.date.format("YYYY/MM/DD")
    }

    return (
      <EditCalendarDialogMobile 
        classes={classes}
        isOpen={PracticeCalendarMobileReducer.isOpen}
        onClose={actions.closeEditCalendarMobile}
        date={stringDate}
    />
    );
  }
}

const mapState = (state, ownProps) => ({
  PracticeCalendarMobileReducer: state.PracticeCalendarMobileReducer,
});

function mapDispatch(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch),
  };
}

EditCalendarMobile.propTypes = {
  date: PropTypes.object.isRequired,
  isOpen: PropTypes.bool.isRequired,
  classes: PropTypes.object,
};

// Material-uiのテーマ設定＋Redux設定
export default connect(mapState, mapDispatch)(
  withStyles(styles, { withTheme: true })(EditCalendarMobile)
);

