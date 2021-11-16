import "./App.css";
// import { Box, ThemeProvider } from '@mui/system';
import { ThemeProvider } from "@mui/material/styles";
import { Theme } from "./Container/Theming";
import { Provider } from 'react-redux'
import { store } from "./Redux/Store";
import { Component } from "react";
import { Dashboard } from "./Container/Dashboard/Dashboard";
export default class App extends Component {
  render() {

    return (
      <Provider store={store}>
        <ThemeProvider theme={Theme}>
          <Dashboard/>
        </ThemeProvider>
      </Provider>
    );
  }
}
