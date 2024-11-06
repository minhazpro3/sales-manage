"use client";
/* eslint-disable react-hooks/rules-of-hooks */
import { createContext, useState } from "react";
export const AppContext = createContext();

const ContextProvider = ({ children }) => {
  // products all
  const [products, setProducts] = useState([]);
  // toggle for header
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  // toggle end header

  return (
    <div>
      <AppContext.Provider
        value={{
          isOpen,
          isDropdownOpen,
          toggleMenu,
          toggleDropdown,
          products,
          setProducts,
        }}
      >
        {children}
      </AppContext.Provider>
    </div>
  );
};

export default ContextProvider;
