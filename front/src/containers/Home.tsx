import React from 'react';

import SimpleTables from '../components/SimpleTables'

// import * as actions from '../actions';

class Home extends React.Component {

  // handleChange = event => {
  //   this.setState({ [event.target.name]: event.target.value });
  // };

  render() {

    // redux関連
    // const { actions } = this.props;

    return (
        <SimpleTables />
    );
  }
}

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