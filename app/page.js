/* eslint-disable react/no-unescaped-entities */
"use client";
import Banner from "@/components/Banner";

import OurServices from "@/components/OurServices";
import ServicePlan from "@/components/ServicePlan";
import UserSidebar from "@/components/UserSidebar";
import Image from "next/image";
import React, { useContext, useState } from "react";
import { AppContext } from "./contextApi/contextProvider";
import { AboutUs } from "@/components/AboutUs";
import Company from "@/components/Company";
import Footer from "@/components/Footer";

export default function Home() {
  // const { setNavDropdown, navDropdown } = useContext(AppContext);
  return (
    <main>
      <div className="-z-100">
        <Banner />
        <OurServices />
        <AboutUs />
        <ServicePlan />
        <Company />
        <Footer />
      </div>
    </main>
  );
}
