"use client";
import AddProductModal from "@/components/dashboard/AddProductModal";
import React, { useContext } from "react";

const Page = () => {
  return (
    <div className="container mx-auto px-8 md:px-0">
      <AddProductModal />
    </div>
  );
};

export default Page;
