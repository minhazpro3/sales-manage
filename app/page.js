/* eslint-disable react/no-unescaped-entities */
"use client";
import Banner from "@/components/Banner";
import Header from "@/components/Header";
import OurServices from "@/components/OurServices";
import ServicePlan from "@/components/ServicePlan";
import UserSidebar from "@/components/UserSidebar";
import Image from "next/image";
import React, { useState } from "react";

export default function Home() {
  const [drawer, setDrawer] = useState(false);
  const drawerFnc = () => {
    setDrawer(!drawer);
  };
  return (
    <main className=" overflow-x-hidden">
      <Header drawerFnc={drawerFnc} drawer={drawer} />
      <UserSidebar drawerFnc={drawerFnc} drawer={drawer} />
      <Banner />
      <OurServices />
      <ServicePlan />
      <div className="text-center text-3xl my-6">Let's Jump Function___</div>
    </main>
  );
}
