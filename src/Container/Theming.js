import { createTheme } from "@mui/material/styles";
import { orange, red, blue, yellow, lightGreen } from "@mui/material/colors";
export const Theme = createTheme({
  palette: {
    primary: {
      main: lightGreen[500],
      dark: blue[200],
    },
    secondary: {
      main: "#fff",
      dark: yellow[200],
    },
    error: {
      main: yellow[300],
    },
  },
});
