import React from "react";
import { Route, Routes,BrowserRouter as Router } from "react-router-dom";
import { CreateTicket } from "../../Component/CreateTicketForm/CreateTicket";
import TemporaryDrawer from "../../Component/TemporaryDrawer";
import TopNavBar from "../../Component/TopNavBar";
import { DummyComponent } from "../DummyComponent";
import {DataGridview} from "../../Component/DataGridview/DataGridview";

import "./dashboard.scss";


const SwitchRouter = () => {
  return (
    <>
      <Routes>
        <Route  path="*" element={<DummyComponent/>} ></Route>
      </Routes>
    </>
  );
};

export const Dashboard = () => {
    
  return (
    <Router>
      <TopNavBar />
      <TemporaryDrawer />
      <div className="ticketCreate">
          <DataGridview className="data-grid"/>
          <CreateTicket className="create-ticket"/>
        </div>
    </Router>
  );
};
