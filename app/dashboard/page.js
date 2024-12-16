"use client";
import Dashboard from "@/components/dashboard/Dashboard";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession, signOut } from "next-auth/react";

const Page = () => {
  return (
    <div className="container mx-auto px-8 md:px-0">
      <Dashboard />
    </div>
  );
};

export default Page;
