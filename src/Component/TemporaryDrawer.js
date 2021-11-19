import {useState} from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import {ListItem,ListItemText,ListItemIcon} from '@mui/material';
import {InboxIcon,HomeIcon} from '@mui/icons-material/MoveToInbox';
import CloseIcon from '@mui/icons-material/Close';
import {useSelector,useDispatch} from 'react-redux';
import {toggleNav} from '../Redux/Actions/genericActions';
import Icon from '@mui/material/Icon';
import {SideNavMenuItems} from '../Fixtures/generic-fixture';
import { Link } from "react-router-dom";
export default function TemporaryDrawer() {
const sideNavToggle = useSelector(state => state.navToggle);
const dispatch = useDispatch();


 const anchor ="left";

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
    >
      <List>
        {SideNavMenuItems.map((item, index) => (
          <ListItem button key={item.title}>
            <ListItemText primary={item.subtile} />
            <Link to={`${item.redirect}`}>{item.title}</Link>
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
            <Button variant="contained" aria-label="outlined primary button group"
             onClick={()=>dispatch(toggleNav())} sx={{color:"primary.dark"}}>
              <CloseIcon/>
            </Button>
            {list(anchor)}
          </Drawer>
        </>
    </div>
  );
}
