import React from "react";
import {useState} from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import {ListItem,ListItemText,ListItemIcon} from '@mui/material';
import {InboxIcon,HomeIcon} from '@mui/icons-material/MoveToInbox';
import CloseIcon from '@mui/icons-material/Close';
import {useSelector,useDispatch} from 'react-redux';
import {toggleNav} from '../Redux/Actions/genericActions';
import Icon from '@mui/material/Icon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import {SideNavMenuItems} from '../Fixtures/generic-fixture';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import { Link } from "react-router-dom";
import "./stylee.css";

export default function TemporaryDrawer() {
const sideNavToggle = useSelector(state => state.navToggle);
const dispatch = useDispatch();

const [open, setOpen] = React.useState(false);
const handleDrawerOpen = () => setOpen(true);
const handleDrawerClose = () => setOpen(false);

console.log({ open });
 const anchor ="left";

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
    >
      <List  >
        {SideNavMenuItems.map((item, index) => (
          <ListItem className="linkk" button key={item.title}>
            <ListItemText className="linkk" primary={item.subtile} />
            <Link className="linkk" style={{textDecoration: 'none' }} onClick={()=>dispatch(toggleNav())} to={`${item.redirect}`}>{item.title}</Link>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );

  return (
    <div>
        <>
        <ClickAwayListener
        mouseEvent="onMouseDown"
        touchEvent="onTouchStart"
        onClickAway={() => open && handleDrawerClose()}
      >
          <Drawer
          onClose={(_, reason) =>
            reason === 'backdropClick' && console.log('close')
          }
          
          anchor="left"
            anchor={anchor}
            open={sideNavToggle}
            
            classes={{
              width: 100,
              height: 300
            }}
            onClick={()=>dispatch(toggleNav())}
          >
        <IconButton  >
          <ChevronLeftIcon onClick={handleDrawerClose} sx={{mr:"-8em",height:"1.5em", ...(open && { display: 'none' })}} />
        </IconButton>
      <Divider />
            {list(anchor)}
          </Drawer>
          </ClickAwayListener>
        </>
    </div>
  );
}