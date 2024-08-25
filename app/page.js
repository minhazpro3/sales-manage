"use client";
import Banner from "@/components/Banner";
import Header from "@/components/Header";
import UserSidebar from "@/components/UserSidebar";
import Image from "next/image";
import React, { useState } from "react";

export default function Home() {
  const [drawer, setDrawer] = useState(false);
  const drawerFnc = () => {
    setDrawer(!drawer);
  };
  return (
    <main className="">
      <Header drawerFnc={drawerFnc} drawer={drawer} />
      <UserSidebar drawerFnc={drawerFnc} drawer={drawer} />
      <Banner />
    </main>
  );
}
