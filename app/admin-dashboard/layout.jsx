import React from "react";

const Layout = ({ children }) => {
  return (
    <div>
      <div>Sidebar</div>
      <div>{children}</div>
    </div>
  );
};

export default Layout;
