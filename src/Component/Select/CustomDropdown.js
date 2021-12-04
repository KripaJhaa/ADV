import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import HomeIcon from "@mui/icons-material/Home";
import CoffeeIcon from "@mui/icons-material/Coffee";
import CheckIcon from "@mui/icons-material/Check";
import { useForm, Controller } from "react-hook-form";

const optionss = [
  { icon: <HomeIcon />, label: "Home" },
  { icon: <CoffeeIcon />, label: "Cofee" },
  { icon: <CheckIcon />, label: "CheckSquare" },
];

export const CustomDropdown = ({ id,field, option,control}) => {
  return (
   
    <Autocomplete
      id={id}
      className="dropdown"
      options={option}
      autoHighlight
      onChange={(event,value)=>field.onChange(value.label)}
      getOptionLabel={(option) => option.label}
      renderOption={(props, option) => (
        <Box component="li" {...props}>
          {option.icon} {option.label} {option.style}
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
  ) 
};
