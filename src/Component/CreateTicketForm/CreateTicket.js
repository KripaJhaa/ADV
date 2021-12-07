import React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormLabel from "@mui/material/FormLabel";
import Stack from "@mui/material/Stack";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import IconButton from '@mui/material/IconButton';
import DialogTitle from '@mui/material/DialogTitle';
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import "./style.scss";
import { CustomDropdown } from "../Select/CustomDropdown";
import { useForm, Controller } from "react-hook-form";
import { Fab, Select } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { v4 as uuidv4 } from 'uuid';

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

const Label = ({ name, important }) => (
  <FormLabel component="legend">
    {name} {important ? <>*</> : <></>}
  </FormLabel>
);

export const CreateTicket = ({ setTicketFormData }) => {
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

  const anchor = "right";

  return (
    <div key={anchor}>
      <Fab
      className="create-ticket-btn"
        color="secondary"
        aria-label="add"
        onClick={toggleDrawer(anchor, true)}
      >
        <AddIcon />
      </Fab>

      <Drawer
        anchor={anchor}
        open={state[anchor]}
        onClose={toggleDrawer(anchor, false)}
      >
      
        <TicketForm setTicketFormData={setTicketFormData} />
        <DialogTitle disableTypography className="drawerTitle">
    <IconButton onClick={toggleDrawer(anchor, false)}>
    <Button variant="outlined"  className="closebutton">cancel</Button>
    </IconButton>
  </DialogTitle>
      </Drawer>
    </div>
  );
};

const TicketForm = ({ setTicketFormData }) => {
  const setTicketForm = (data) => {
    let _final_data={id:uuidv4(),...data}
    setTicketFormData(_final_data);
  };

  const { control, register, handleSubmit, watch } = useForm({});
  const [value, setValue] = React.useState(new Date("2014-08-18T21:11:54"));

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
   
    <form onSubmit={handleSubmit(setTicketForm)}>
     <div className="header">
    <h1> Create ticket</h1>
</div>
      <Label className="label1" name="Ticket name" />
      <TextField
        id="ticketName"
        {...register("ticketname")}
        className="inputbox"
      />

      <Label name="Pipeline" />
      <Controller
        name="pipeline"
        control={control}
        render={({ field }) => (
          <CustomDropdown field={field} option={pipeline} />
        )}
      />

      <Label name="Ticket Status" />
      <Controller
        name="ticketstatus"
        control={control}
        render={({ field }) => <CustomDropdown field={field} option={ticket} />}
      />

      <Label name="Ticket owner" />
      <Controller
        name="ticketOwner"
        control={control}
        render={({ field }) => (
          <CustomDropdown field={field} option={ticketowner} />
        )}
      />

      <Label name="Priority" />
      <Controller
        name="priority"
        control={control}
        render={({ field }) => (
          <CustomDropdown field={field} option={priority} />
        )}
      />
<Label name="Create Date" />
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Stack spacing={1}>
          <DesktopDatePicker
            inputFormat="MM/dd/yyyy"
            value={value}
            onChange={handleChange}
            renderInput={(params) => <TextField {...register("date")} {...params} />}
          />
        </Stack>
      </LocalizationProvider>

      <Stack className="stack" spacing={3} direction="row">
        <Button variant="outlined" type="submit">
          Submit
        </Button>
          
        <Button color="neutral" variant="contained">
          Create and add another
        </Button>
       
      </Stack>
    </form>
  );
};
