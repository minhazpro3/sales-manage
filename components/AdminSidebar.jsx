import Link from "next/link";
import React from "react";

const AdminSidebar = () => {
  return (
    <div className="container mx-auto px-8 md:px-0">
      <div className="relative">
        <div className=" bg-gray-200 md:visible flex absolute -right-8 w-36 flex-col items-center gap-4 px-6 py-12 h-screen ">
          <Link
            className="px-6 py-1 hover:bg-gray-100 rounded-md   "
            href={"http://"}
          >
            Dashboard
          </Link>
          <Link
            className="px-6 py-1 hover:bg-gray-100 rounded-md   "
            href={"http://"}
          >
            Products
          </Link>
          <Link
            className="px-6 py-1 hover:bg-gray-100 rounded-md   "
            href={"http://"}
          >
            Customers
          </Link>
          <Link
            className="px-6 py-1 hover:bg-gray-100 rounded-md   "
            href={"http://"}
          >
            Employee
          </Link>
          <Link
            className="px-6 py-1 hover:bg-gray-100 rounded-md   "
            href={"http://"}
          >
            Logout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdminSidebar;
