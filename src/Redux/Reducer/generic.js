import { Constant } from "../Constant";

 const sideNavToggle = (state = false, action) => {
  switch (action.type) {
    case Constant.TOGGLE_NAV:
      return !state;
    default:
      return state;
  }
};

export default sideNavToggle;