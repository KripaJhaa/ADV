import {useState} from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import {ListItem,ListItemText,ListItemIcon} from '@mui/material';
import {InboxIcon,HomeIcon} from '@mui/icons-material/MoveToInbox';

import {useSelector,useDispatch} from 'react-redux';
import {toggleNav} from '../Redux/Actions/genericActions';
import Icon from '@mui/material/Icon';
import {SideNavMenuItems} from '../Fixtures/generic-fixture';

export default function TemporaryDrawer() {
const sideNavToggle = useSelector(state => state.navToggle);
const dispatch = useDispatch();


 const anchor ="right";

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
    >
      <List>
        {SideNavMenuItems.map((item, index) => (
          <ListItem button key={item.title}>
            <ListItemText primary={item.title} />
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );

  return (
    <div>
        <>
          <Drawer
            anchor={anchor}
            open={sideNavToggle}
            classes={{
              width: 100,
              height: 300
            }}
          >
            <Button onClick={()=>dispatch(toggleNav())} sx={{color:"primary.dark"}}>X</Button>
            {list(anchor)}
          </Drawer>
        </>
    </div>
  );
}
