import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons';
export const Select1 = () => {
  return (
    <Autocomplete
      id="example"
      sx={{width: 300,marginRight:22 }}
      options={optionss}
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
          
          label="Select....."
          inputProps={{
            ...params.inputProps,
           
          }}
        />
      )}
    />
  );
}


const optionss = [
  {  icon:<FontAwesomeIcon icon={faHome} transform="left-15"  />,label: 'Home'},
  {  icon:<FontAwesomeIcon icon={faCoffee} transform="left-15" />,label: 'Cofee' },
  {   icon:<FontAwesomeIcon icon={faCheckSquare} transform="left-15" />,label: 'CheckSquare' },
  ];
