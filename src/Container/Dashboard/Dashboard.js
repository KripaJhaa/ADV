import React from 'react'
import { Route, Switch, HashRouter } from "react-router-dom";
import TemporaryDrawer from '../../Component/TemporaryDrawer';
import TopNavBar from '../../Component/TopNavBar';

export const Dashboard = () => {
    return (
        <HashRouter basename="/">
           <TopNavBar/>
          <TemporaryDrawer />
        </HashRouter>
    )
}
