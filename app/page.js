/* eslint-disable react/no-unescaped-entities */
"use client";
import Banner from "@/components/Banner";
import Header from "@/components/Header";
import OurServices from "@/components/OurServices";
import ServicePlan from "@/components/ServicePlan";
import UserSidebar from "@/components/UserSidebar";
import Image from "next/image";
import React, { useContext, useState } from "react";
import { AppContext } from "./contextApi/contextProvider";
import { AboutUs } from "@/components/AboutUs";

export default function Home() {
  const { setNavDropdown, navDropdown } = useContext(AppContext);
  return (
    <main className=" overflow-x-hidden">
      {/* <Header />
      <UserSidebar /> */}
      <Banner />
      <OurServices />
      <AboutUs />
      <ServicePlan />
      <div className="text-center text-3xl my-6">Let's Jump Function___</div>
    </main>
  );
}
