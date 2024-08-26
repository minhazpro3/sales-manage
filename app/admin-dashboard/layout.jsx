import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="container mx-auto px-6  md:px-0">
      <div className="grid grid-cols-12 gap-4 place-items-stretch">
        <div className="col-span-2">06</div>
        <div className="col-span-10 self-end">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
