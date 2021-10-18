import React from "react";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";

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
      <Button sx={{ color: "primary.dark" }}>X</Button>
      <p>lorepsum</p>
    </Drawer>
  );
};

Sidedrawer.defaultProps = {
  direction: "left",
};
