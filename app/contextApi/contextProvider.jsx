"use client";
/* eslint-disable react-hooks/rules-of-hooks */
import { createContext, useState } from "react";
export const AppContext = createContext();

const ContextProvider = ({ children }) => {
  const [drawer, setDrawer] = useState(false);
  console.log(drawer);
  const drawerFnc = () => {
    setDrawer(!drawer);
  };

  return (
    <div>
      <AppContext.Provider value={{ drawer, drawerFnc, setDrawer }}>
        {children}
      </AppContext.Provider>
    </div>
  );
};

export default ContextProvider;
