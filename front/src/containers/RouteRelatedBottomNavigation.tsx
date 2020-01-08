import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

// Material-UIアイコン取得
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';

// Route関連
import { Link } from 'react-router-dom';

// スタイル
const useStyles = makeStyles((theme: Theme) =>
 createStyles({
  wrapper:{
    display: 'block',
    width: '100%',
    position: 'fixed',
    left: 0,
    bottom: 0,
    zIndex: 1000,
    textAlign: 'center',
  },
  root: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  button: {
    maxWidth: '100%', // ボタンが横一杯に広がって欲しくない時はコメントアウト
  },
}));


export const RouteRelatedBottomNavigation: React.FC = () => {
  const classes = useStyles();
  const buttons_info = [
    { label: 'トップページ', icon: <HomeIcon />, link_to: '/'},
    { label: 'サイトマップ', icon: <InfoIcon />, link_to: '/info'},
  ];

  const buttons = buttons_info.map( (button_info) => {
      return (
        <BottomNavigationAction
          value={button_info.link_to}
          label={button_info.label}
          className={classes.button}
          icon={button_info.icon}
          component={Link}
          to={button_info.link_to}
        />
      );
    })

  return (
    <div className={classes.wrapper}>
      <BottomNavigation
        showLabels
        className={classes.root}
        children={buttons}
      />
    </div>
  );
}