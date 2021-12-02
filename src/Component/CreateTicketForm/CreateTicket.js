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
import { useForm, Controller } from "react-hook-form";
import { Select } from "@mui/material";

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

const Label = ({ name, important }) => (
  <FormLabel component="legend">
    {name} {important ? <>*</> : <></>}
  </FormLabel>
);

export const CreateTicket = ({setTicketFormData}) => {
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
      <Button variant="contained" onClick={toggleDrawer(anchor, true)}>
        Create Ticket
      </Button>
      <Drawer
        anchor={anchor}
        open={state[anchor]}
        onClose={toggleDrawer(anchor, false)}
      >
        {/* <Box
          component="form"
          sx={{ width: "70ch" }}
        >
          <div className="header">
            <h1> Create ticket</h1>
          </div>
            <Check/>
        </Box> */}
        <TicketForm setTicketFormData={setTicketFormData} />
      </Drawer>
    </div>
  );
};

const TicketForm = ({setTicketFormData}) => {
  const setTicketForm = (data) => {
    setTicketFormData(data);
  };

  const { control, register, handleSubmit, watch } = useForm({
    defaultValues: {
      firstName: "",
      select: {},
    },
  });

  return (
    <form onSubmit={handleSubmit(setTicketForm)}>
      <Label name="Ticket name" />
      <TextField
        id="ticketName"
        {...register("example")}
        className="inputbox"
      />

      <Label name="Pipeline" />
      <CustomDropdown id="pipeline" option={pipeline} />

      <Label name="Ticket Status" />
      <CustomDropdown id="status" {...register("newCustom")} control={control} option={ticket} />


    

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
        <Button variant="outlined" type="submit">
          Submit
        </Button>
        <Button variant="outlined">Create and add another</Button>
        <Button variant="outlined">cancel</Button>
      </Stack>
    </form>
  );
};

