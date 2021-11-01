import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import HomeIcon from '@mui/icons-material/Home';
import CoffeeIcon from '@mui/icons-material/Coffee';
import CheckIcon from '@mui/icons-material/Check';

const optionss = [
  {  icon:<HomeIcon />,label: 'Home'},
  { icon:<CoffeeIcon />, label: 'Cofee' },
  {  icon:<CheckIcon/>, label: 'CheckSquare' },
  ];


export const CustomDropdown = () => {
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


