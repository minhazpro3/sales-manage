"use client";
/* eslint-disable react-hooks/rules-of-hooks */
import { createContext, useState } from "react";
export const AppContext = createContext();

const ContextProvider = ({ children }) => {
  const [drawer, setDrawer] = useState(false);
  const [navDropdown, setNavDropdown] = useState(false);

  const drawerFnc = () => {
    setDrawer(!drawer);
  };

  return (
    <div>
      <AppContext.Provider
        value={{ drawer, drawerFnc, setDrawer, navDropdown, setNavDropdown }}
      >
        {children}
      </AppContext.Provider>
    </div>
  );
};

export default ContextProvider;
