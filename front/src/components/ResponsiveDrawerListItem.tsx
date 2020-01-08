import React from 'react';

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

// Route関連
import { Link } from 'react-router-dom'

interface ResponsiveDrawerProps {
  to: string,
  onClick: () => void,
  icon: JSX.Element,
  text: string,
};

type Props = ResponsiveDrawerProps

export default function ResponsiveDrawerListItem(props: Props) {
  const {to, onClick, icon, text} = props;
  return (
    <ListItem button component={Link} to={to} onClick={onClick}>
      <ListItemIcon>
        {icon}
      </ListItemIcon>
      <ListItemText primary={text} />
    </ListItem>
  )
};