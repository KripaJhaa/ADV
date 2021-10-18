import {Sidedrawer} from "../Component/SideDrawer/Sidedrawer";
import React from 'react';

export default {
    title: 'New/SideDrawer',
    component: Sidedrawer,
  };
export const RightOpen = ()=> <Sidedrawer direction="right"/>;
export const BottomOpen = ()=> <Sidedrawer direction="bottom"/>;
export const TopOpen = ()=> <Sidedrawer direction="top"/>;