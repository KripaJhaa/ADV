import React from 'react'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormLabel from '@mui/material/FormLabel';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import TimePicker from '@mui/lab/TimePicker';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import './style.scss'
import {CustomDropdown} from "../Select/CustomDropdown";


const data = "Hello Everyone";
const ticketowner = [
    { label: 'Riya' },
   
];
const pipeline = [
    { label: 'support pipeline' },
    { label: 'add another pipeline' },

];
const source = [
    { label: 'chat' },
    { label: 'form' },
    { label: 'email' },
    { label: 'phone' },
];
const ticket = [
    { label: 'New' },
    { label: 'waiting on contact' },
    { label: 'waiting on us' },
    { label: 'closed' },
];
const priority = [
    { label: ' Low' },
    { label: 'Medium' },
    { label: 'High' },

];
const company = [
    {}
];

export const CreateTicket  = () => {
    const [state, setState] = React.useState({
        left: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setState({ ...state, [anchor]: open });
    };
    const [value, setValue] = React.useState(new Date('2014-08-18'));

    const handleChange = (newValue) => {
      setValue(newValue);
    };
    return (
        <>
        
        
            {['right'].map((anchor) => (
                <React.Fragment key={anchor}>
                    <Button  variant="contained"  onClick={toggleDrawer(anchor, true)}>Create Ticket</Button>
                    <Drawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                    >
                        <Box
                            component="form"
                            sx={{    width: '70ch'    }}
                            noValidate
                            autoComplete="off">

                            <div className="header">
                                <h1> Create ticket</h1>
                            </div>
                            <form>
                            <FormLabel component="legend">Ticket name*</FormLabel>
                            <TextField className="inputboxx"/>

                            <FormLabel component="legend">Pipeline*</FormLabel>
                            <CustomDropdown option={pipeline}/>
                           
                            <FormLabel component="legend">Ticket Status*</FormLabel>
                            <CustomDropdown option={ticket}/>
                           
                            <FormLabel component="legend">Ticket description*</FormLabel>
                            <TextField
                            />
                            <FormLabel component="legend">Source*</FormLabel>
                            <CustomDropdown option={source}/>

                            <FormLabel component="legend"> Ticket owner*</FormLabel>
                            <CustomDropdown option={ticketowner}/>
                           
                            <FormLabel component="legend"> Priority*</FormLabel>
                            <CustomDropdown option={priority}/>

                            <FormLabel component="legend"> Create Date*</FormLabel>
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
                             </LocalizationProvider>
                            
                            <FormLabel component="legend"> Company*</FormLabel>
                            <CustomDropdown option={company}/>
                           
                            <FormLabel sx={{ mt: 4 }} component="legend"> Contact*</FormLabel>
                            <CustomDropdown option={company}/>                   
                            <Stack className="stack" spacing={2} direction="row">
                            <Button variant="outlined">Submit</Button>
                                <Button variant="outlined">Create and add another</Button>
                                <Button variant="outlined">cancel</Button>
                            </Stack>
                            </form>
                        </Box>
                    </Drawer>
                </React.Fragment>
            ))}
        </>
    );
}
