import React from 'react'
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { red } from '@mui/material/colors';
import Typography from "@mui/material/Typography";

export const PlainCard = (args) => {
    return (
        <Paper sx={{ m: 1 , bgcolor:"primary.light"}} elevation={4}>
          <Typography id="keep-mounted-modal-description" sx={{ mt: 2, color:"white" }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
        </Paper>
    )
}
PlainCard.default={
    backGround:red
}


