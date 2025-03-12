import React from "react";
import { Outlet } from "react-router";

const Layout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* <div>Component Header</div> */}
      <div className="grow">
        <Outlet />
      </div>
      {/* <div>Component Footer</div> */}
    </div>
  );
};

export default Layout;
