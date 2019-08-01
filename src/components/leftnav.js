import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Avatar from '@material-ui/core/Avatar';
import {Link} from 'react-router-dom'
import Constants from '../helpers/constants'
const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  bigAvatar: {
    margin: 10,
    width: 60,
    height: 60
  },
  justifyCenter: {
    justifyContent: 'center',
    textAlign: "center"
  }
});

export default function SwipeableTemporaryDrawer({open, hide}) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: true,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (side, open) => event => {
    // console.log(open)
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    hide()
    // setState({ ...state, [side]: open });
  };

  const fullList = side => (
    <div
      className={classes.fullList}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
        <ListItem className={classes.justifyCenter}>
          <Avatar className={classes.bigAvatar} src="http://www.electronicwings.com/storage/mem.png" />
        </ListItem>
        <ListItem className={classes.justifyCenter}>
            <ListItemText> Suyesh Tiwari </ListItemText>
        </ListItem>

        {Constants.navigation.map((nav, index) => (
          <ListItem button key={nav.url}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <Link to={`/${nav.url}`}><ListItemText primary={nav.name} /></Link>
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div>
      <SwipeableDrawer
        open={open}
        onClose={toggleDrawer('left', false)}
        onOpen={toggleDrawer('left', true)}
      >
        {fullList('left')}
      </SwipeableDrawer>
    </div>
  );
}


