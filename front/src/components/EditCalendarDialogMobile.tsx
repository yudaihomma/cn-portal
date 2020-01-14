import * as React from 'react';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
// import Slide from '@material-ui/core/Slide';
import PracticeTimePickMobile from './PracticeTimePickMobile'

import moment from 'moment';
moment.locale('ja');

// const Transition = React.forwardRef(function Transition(props, ref) {
//   return <Slide direction="up" ref={ref} {...props} />;
// });

interface EditCalendarDialogMobileProps {
  classes: Record<"appBar" | "title", string>,
  isOpen: boolean,
  onClose:() => void,
  date: string | undefined,
};

type Props = EditCalendarDialogMobileProps

export const EditCalendarDialogMobile: React.FC<Props> = props =>  {

  const { classes, isOpen, onClose, date } = props;

  return (
    <Dialog fullScreen open={isOpen} onClose={onClose}>
      <AppBar className={classes.appBar}>
        <Toolbar>
          <IconButton edge="start" color="inherit" onClick={onClose} aria-label="close">
            <CloseIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Sound
          </Typography>
          <Button autoFocus color="inherit" onClick={onClose}>
            save
          </Button>
        </Toolbar>
      </AppBar>
      <List>
        <ListItem>
          <ListItemText primary={date} />
        </ListItem>
        <Divider />
        <ListItem>
          <PracticeTimePickMobile/>
        </ListItem>
      </List>
    </Dialog>
  );
}
