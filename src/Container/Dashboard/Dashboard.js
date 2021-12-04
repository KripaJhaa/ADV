import React from "react";
import { Route, Routes,BrowserRouter as Router } from "react-router-dom";
import TemporaryDrawer from "../../Component/TemporaryDrawer";
import TopNavBar from "../../Component/TopNavBar";
import { Home } from "../Home/Home";
import { TicketDashboard } from "../TicketDashboard/TicketDashboard";
// import "./dashboard.scss";
import Button from "@mui/material/Button";


const SwitchRouter = () => {
  return (
    <>
      <Routes>
      <Route exact path="/" element={<Home/>} ></Route>
        <Route exact path="/tickets" element={<TicketDashboard/>} ></Route>
      </Routes>
    </>
  );
};

export const Dashboard = () => {
    
  return (
    <Router>
      <TopNavBar />
      <TemporaryDrawer />
      <SwitchRouter/>
    </Router>
  );
};
