import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormLabel from '@mui/material/FormLabel';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import './style.scss'


export const Create1 = () => {
    const [state, setState] = React.useState({
        left: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setState({ ...state, [anchor]: open });
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
                            sx={{

                                width: '70ch',
                                '& .MuiFormLabel-root': { mt: 7.5, ml: 7, fontSize: '14px', fontFamily: 'Avenir Next W02,Helvetica,Arial,sans-serif', width: '65ch' },
                                '& .MuiTextField-root': { m: 1, ml: 7,padding:'2px', width: '55ch', height: '5px' },
                            }}
                            noValidate
                            autoComplete="off">
                            
                            <div className="header">
                                <h1> Create ticket</h1>
                            </div>
                            <FormLabel
                                component="legend">Ticket name*</FormLabel>
                            <TextField 
                            />
                            <FormLabel component="legend">Pipeline*</FormLabel>
                            <Autocomplete
                                id="pipeline"
                                options={pipeline}
                                autoHighlight
                                getOptionLabel={(option) => option.label}

                                renderOption={(props, option) => (
                                    <Box component="li" {...props}>
                                        {option.icon}  {option.label} 
                                    </Box>
                                )}
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        inputProps={{
                                            ...params.inputProps,
                                        }}
                                    />
                                )}
                            />
                            <FormLabel component="legend">Ticket Status*</FormLabel>
                            <Autocomplete
                                id="ticket"
                                options={ticket}
                                autoHighlight
                                getOptionLabel={(option) => option.label}

                                renderOption={(props, option) => (
                                    <Box component="li" {...props}>
                                        {option.icon}  {option.label}
                                    </Box>
                                )}
                                renderInput={(params) => (
                                    <TextField
                                        {...params}


                                        inputProps={{
                                            ...params.inputProps,

                                        }}
                                    />
                                )}
                            />
                            <FormLabel component="legend">Ticket description*</FormLabel>
                            <TextField
                            />
                            <FormLabel component="legend">Source*</FormLabel>
                            <Autocomplete
                                className="dropdown"

                                options={source}
                                autoHighlight
                                getOptionLabel={(option) => option.label}

                                renderOption={(props, option) => (
                                    <Box component="li" {...props}>
                                        {option.icon}  {option.label} {option.style}
                                    </Box>
                                )}
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        inputProps={{
                                            ...params.inputProps,

                                        }}
                                    />
                                )}
                            />
                            <FormLabel component="legend"> Ticket owner*</FormLabel>
                            <Autocomplete
                                className="dropdown"
                                options={ticketowner}
                                autoHighlight
                                getOptionLabel={(option) => option.label}

                                renderOption={(props, option) => (
                                    <Box component="li" {...props}>
                                        {option.icon}  {option.label} {option.style}
                                    </Box>
                                )}
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        inputProps={{
                                            ...params.inputProps,

                                        }}
                                    />
                                )}
                            />
                            <FormLabel component="legend"> Priority*</FormLabel>
                            <Autocomplete
                                id=" priority"
                                className="dropdown"
                                options={priority}
                                autoHighlight
                                getOptionLabel={(option) => option.label}

                                renderOption={(props, option) => (
                                    <Box component="li" {...props}>
                                        {option.icon}  {option.label} 
                                    </Box>
                                )}
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        inputProps={{
                                            ...params.inputProps,

                                        }}
                                    />
                                )}
                            />
                            <FormLabel component="legend"> Create Date*</FormLabel>
                            <TextField
                                id="date"
                                type="date"
                                className="dropdown"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                            <FormLabel sx={{ mt: 4 }} component="legend"> Company*</FormLabel>
                            <Autocomplete
                                id=" company"
                                className="dropdown"
                                options={company}
                                autoHighlight

                                getOptionLabel={(option) => option.label}

                                renderOption={(props, option) => (
                                    <Box component="li" {...props}>
                                        {option.icon}  {option.label} 
                                    </Box>
                                )}
                                renderInput={(params) => (
                                    <TextField
                                        {...params}

                                        inputProps={{
                                            ...params.inputProps,

                                        }}
                                    />
                                )}
                            />
                            <FormLabel sx={{ mt: 4 }} component="legend"> Contact*</FormLabel>
                            <Autocomplete
                                id=" company"
                                className="dropdown"
                                options={company}
                                autoHighlight

                                getOptionLabel={(option) => option.label}

                                renderOption={(props, option) => (
                                    <Box component="li" {...props}>
                                        {option.icon}  {option.label} 
                                    </Box>
                                )}
                                renderInput={(params) => (
                                    <TextField
                                        {...params}

                                        inputProps={{
                                            ...params.inputProps,

                                        }}
                                    />
                                )}
                            />
                            <Stack className="stack" spacing={2} direction="row">
                                <Button variant="outlined">Create</Button>
                                <Button variant="outlined">Create and add another</Button>
                                <Button variant="outlined">cancel</Button>
                            </Stack>
                        </Box>
                    </Drawer>
                </React.Fragment>
            ))}
        </>
    );
}
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