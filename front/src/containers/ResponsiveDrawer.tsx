import React, { useState } from 'react';

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Hidden from '@material-ui/core/Hidden';
import Divider from '@material-ui/core/Divider';
import MenuIcon from '@material-ui/icons/Menu';

// Material-UIアイコン取得
import SettingsIcon from '@material-ui/icons/Settings';
import InfoIcon from '@material-ui/icons/Info';
import HomeIcon from '@material-ui/icons/Home';
import EventIcon from '@material-ui/icons/Event';

// コンポーネントの準備
import ResponsiveDrawerListItem from '../components/ResponsiveDrawerListItem';

// 設定値
const drawerWidth = 240;
const headerNavigationHeight = 56;
const bottomNavigationHeight = 56;

// スタイル
const useStyles = makeStyles((theme: Theme) =>
 createStyles({
  root: {
    flexGrow: 1,
    height: '100vh',
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    width: '100%',
  },
  appBar: {
    position: 'absolute',
    marginLeft: drawerWidth,
    [theme.breakpoints.up('md')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  toolBar: {
    // justifyContent: 'start', // 中央寄せのため追加
    minHeight: bottomNavigationHeight,
  },
  navIconHide: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    height: '100vh',
    [theme.breakpoints.up('md')]: {
      position: 'relative',
    },
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
    paddingTop: `calc(10px + ${headerNavigationHeight}px)`,
    paddingBottom: `calc(10px + ${bottomNavigationHeight}px)`,
    paddingLeft: 0,
    paddingRight: 0,
    [theme.breakpoints.up('md')]: {
      paddingBottom: 10,
    },
  },
  // ヘッダーロゴ
  header: {
    display: 'flex',
  },
  anchor: {
  direction: theme.direction
  },
}));

export const ResponsiveDrawer: React.FC = ({children}) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const classes = useStyles();

  const drawer = (
    <div>
      <List>
        <ResponsiveDrawerListItem
          to="/info"
          onClick={() => setMobileOpen(false)}
          icon={<InfoIcon />}
          text="サイトマップ"
        />
      </List>
      <Divider />
      <List>
        <ResponsiveDrawerListItem
          to="/"
          onClick={() => setMobileOpen(false)}
          icon={<HomeIcon />}
          text="トップページ"
        />
        <ResponsiveDrawerListItem
          to="/PracticeSchedule"
          onClick={() => setMobileOpen(false)}
          icon={<EventIcon />}
          text="練習スケジュール"
        />
        <ResponsiveDrawerListItem
          to="/settings"
          onClick={() => setMobileOpen(false)}
          icon={<SettingsIcon />}
          text="設定"
        />
      </List>
    </div>
  );

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position="fixed">
        <Toolbar className={classes.toolBar} variant="dense">
          <IconButton
            color="inherit"
            aria-label="Open drawer"
            onClick={() => setMobileOpen(true)}
            className={classes.navIconHide}
          >
            <MenuIcon />
          </IconButton>
            {/* <Typography float="left" variant="h1" color="inherit" noWrap> */}
            <Typography variant="subtitle2" color="inherit" noWrap>
              <h2 className={classes.header}>CancaoNova Portal</h2>
            </Typography>
        </Toolbar>
      </AppBar>
      <Hidden mdUp>
        <Drawer
          variant="temporary"
          anchor={classes.anchor === 'rtl' ? 'right' : 'left'}
          open={mobileOpen}
          onClose={() => setMobileOpen(false)}
          classes={{
            paper: classes.drawerPaper,
          }}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          {drawer}
        </Drawer>
      </Hidden>
      <Hidden smDown implementation="css">
        <Drawer
          variant="permanent"
          open
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          {drawer}
        </Drawer>
      </Hidden>
      <main className={classes.content}>
        {children}
      </main>
    </div>
  );
}