import "./App.css";
import TemporaryDrawer from "./Component/TemporaryDrawer";
// import { Box, ThemeProvider } from '@mui/system';
import { ThemeProvider } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import { Theme } from "./Container/Theming";
import { Provider } from 'react-redux'
import { store } from "./Redux/Store";
import { Component } from "react";
import TopNavBar  from "./Component/TopNavBar";
import ModalTemplate from "./Component/modalTemplate";
import { LoadModalFixture } from "./Fixtures/generic-fixture";

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ThemeProvider theme={Theme}>
          <TopNavBar/>
          <ModalTemplate ModalFixture={LoadModalFixture}/>
          <TemporaryDrawer />
        </ThemeProvider>
      </Provider>
    );
  }
}
