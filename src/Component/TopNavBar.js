import { Button, Box,Toolbar,IconButton,Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleNav } from "../Redux/Actions/genericActions";

const TopNavBar = () => {
    const dispatch = useDispatch();


  return (
    <Box sx={{ bgcolor: "secondary.dark" }}>
     
     <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={()=>dispatch(toggleNav())}
          >
            <MenuIcon />    
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Manage 
          </Typography>
          </Toolbar>
    </Box>
  );
};

export default TopNavBar;