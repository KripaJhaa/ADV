import React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormLabel from "@mui/material/FormLabel";
import Stack from "@mui/material/Stack";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import "./style.scss";
import { CustomDropdown } from "../Select/CustomDropdown";

const data = "Hello Everyone";
const ticketowner = [{ label: "Riya" }];
const pipeline = [
  { label: "support pipeline" },
  { label: "add another pipeline" },
];
const source = [
  { label: "chat" },
  { label: "form" },
  { label: "email" },
  { label: "phone" },
];
const ticket = [
  { label: "New" },
  { label: "waiting on contact" },
  { label: "waiting on us" },
  { label: "closed" },
];
const priority = [{ label: " Low" }, { label: "Medium" }, { label: "High" }];

export const CreateTicket = () => {
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };
  const [value, setValue] = React.useState(new Date("2014-08-18"));

  const Label = ({name,important}) => (<FormLabel component="legend">{name} {important ? <>*</> : <></>}</FormLabel>);

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  const anchor ="right";


    const createTicketForm=(event)=>{

      event.preventDefault();
      console.log(event);

      data= {ticketName:"asdnasd",status:"processing"};
  }

  return (
    <div key={anchor}>
          <Button  variant="contained" onClick={toggleDrawer(anchor, true)}>
            Create Ticket
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            <Box
              component="form"
              sx={{ width: "70ch" }}
              noValidate
              autoComplete="off"
            >
              <div className="header">
                <h1> Create ticket</h1>
              </div>
              <form>
              <Label name="Ticket name" />
                <TextField  id="ticketName" className="inputboxx" />

                <Label name="Pipeline" />
                <CustomDropdown id="pipeline" option={pipeline} />

                <Label name="Ticket Status" />
                <CustomDropdown id="status" option={ticket} />

                {/* <Label name="Ticket owner" />
                <CustomDropdown option={ticketowner} />

                <Label name="Priority" important="true" />
                <CustomDropdown option={priority} />

                <Label name="Create Date*" />
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <Stack spacing={3}>
                    <DesktopDatePicker
                      className="dropdown"
                      inputFormat="MM/dd/yyyy"
                      value={value}
                      onChange={handleChange}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </Stack>
                </LocalizationProvider> */}

                <Stack className="stack" spacing={2} direction="row">
                  <Button variant="outlined" type="submit">Submit</Button>
                  <Button variant="outlined">Create and add another</Button>
                  <Button variant="outlined">cancel</Button>
                </Stack>
              </form>
            </Box>
          </Drawer>
  
    </div>
  );
};
