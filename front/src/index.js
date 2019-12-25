import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// Material-UI
import { createMuiTheme, MuiThemeProvider  } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';
import indigo from '@material-ui/core/colors/indigo';

// Redux関連
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import {store} from './reducers/store';

// Router関連
import { BrowserRouter as Router } from 'react-router-dom';

// // Redux-Thunk関連（非同期データ取得用）
// import thunk from 'redux-thunk'


// Redux設定
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // Chromeのデバック用
// const composeEnhancers = compose; // 本番用
// const store = createStore(
//   reducers,
//   composeEnhancers(
//     applyMiddleware(thunk),
//   )
// );


// Material-UIテーマカスタマイズ
const theme = createMuiTheme({
    palette: {
      type: 'light', // light or dark
      primary: indigo, // primaryのカラー
      secondary: red, // secondaryのカラー
    },
  });

ReactDOM.render(
    <Provider store={store}>
      <MuiThemeProvider theme={theme} >
        <Router>
          <App/>
        </Router>
      </MuiThemeProvider>
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
