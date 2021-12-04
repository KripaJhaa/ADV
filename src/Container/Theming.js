import { createTheme } from "@mui/material/styles";
export const Theme = createTheme({

  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#a9bcef',
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    neutral: {
      main: '#64748B',
      contrastText: '#fff',
    },
    secondary: {
      light: '#7a97e5',
      main: '#4f76e1',
      // dark: will be calculated from palette.secondary.main,
      contrastText: '#ffcc00',
    },
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: 3,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
  },
});
