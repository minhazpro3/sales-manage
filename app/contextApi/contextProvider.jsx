"use client";
/* eslint-disable react-hooks/rules-of-hooks */
import { createContext, useEffect, useState } from "react";
export const AppContext = createContext();

const ContextProvider = ({ children }) => {
  // products all
  const [token, setToken] = useState(null);

  const [products, setProducts] = useState([]);
  // toggle for header
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  // get token
  useEffect(() => {
    const storedToken = sessionStorage.getItem("token");
    setToken(storedToken);
  }, []);

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
          loading,
          setLoading,
          token,
          setToken,
        }}
      >
        {children}
      </AppContext.Provider>
    </div>
  );
};

export default ContextProvider;
