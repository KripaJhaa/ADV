import React from "react";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export const Sidedrawer = ({ direction }) => {
  return (
    <Drawer
      anchor={direction}
      open={true}
      classes={{
        width: 100,
        height: 300,
      }}
    >
     <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '20ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          error
          id="outlined-error"
          label="Error"
          defaultValue="Hello World"
        />
        <TextField
          error
          id="outlined-error-helper-text"
          label="Error"
          defaultValue="Hello World"
          helperText="Incorrect entry."
        />
      </div>
      
    </Box>
    </Drawer>
  );
};

Sidedrawer.defaultProps = {
  direction: "left",
};
