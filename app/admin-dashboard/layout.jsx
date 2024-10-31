import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="container mx-auto px-6  md:px-0">
      <div className="grid grid-cols-12 gap-4 place-items-stretch">
        <div className="col-span-2">
          <div className="li">amar</div>
          <div className="li">smator</div>
          <div className="li">bah valoi</div>
          <div className="li">kita koram</div>
        </div>
        <div className="col-span-10 self-end">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
