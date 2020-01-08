import * as React from 'react';
import './App.css';
import {Home} from './containers/Home';
import {PracticeSchedule} from './containers/PracticeSchedule/PracticeSchedule';

import './react_dates_overrides.css'
// Route関連
import { Route, Switch } from 'react-router-dom';

import {ResponsiveDrawer} from './containers/ResponsiveDrawer';
import {RouteRelatedBottomNavigation} from './containers/RouteRelatedBottomNavigation';

// コンポーネント読み込み
import WrapMainContent from './components/WrapMainContent'

// 不明なRouteは全てNotFound
const NotFound = () => {
  return(
    <h2>ページが見つかりません</h2>
  )
}

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <ResponsiveDrawer>
          <Switch>
            <Route exact path="/" component={WrapMainContent(Home)}/>
            <Route exact path="/PracticeSchedule" component={WrapMainContent(PracticeSchedule)}/>
            {/* <Route exact path="/settings" component={WrapMainContent(Settings)}/> */}
            <Route component={WrapMainContent(NotFound)}/>
          </Switch>
        </ResponsiveDrawer>
        <RouteRelatedBottomNavigation/>
      </div>
    );
  }
}


// React-Router情報取得
export default App;