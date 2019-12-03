import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles, withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import SimpleTables from '../components/SimpleTables'

// Material-UIアイコン取得
import Search from '@material-ui/icons/Search';

// Redux関連
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import * as actions from '../actions';

class Home extends React.Component {

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {

    // redux関連
    // const { actions } = this.props;

    return (
        <SimpleTables />
    );
  }
}

// Material-ui関連
Home.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

// // Redux関連
// const mapState = (state, ownProps) => ({
// });
// function mapDispatch(dispatch) {
//   return {
//     actions: bindActionCreators(actions, dispatch),
//   };
// }

// // Material-uiのテーマ設定＋Redux設定
// export default connect(mapState, mapDispatch)(
//   withStyles(useStyles(), { withTheme: true })(Home)
// );
export default Home