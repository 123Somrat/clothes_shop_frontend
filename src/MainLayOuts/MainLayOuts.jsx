import React from "react";
import Header from "../Components/Header/Header";
import Navbar from "../Components/NavBar/Navbar";
import { Outlet } from "react-router-dom";
import LatestNewses from "../Components/LatestNewses/LatestNewses";

export default function MainLayOuts() {
  return (
    <div className="max-w-6xl mx-auto  m-2">
      <div>
        <Header />
      </div>
      <div>
        <Navbar />
      </div>
      <div>
        <LatestNewses/>
      </div>
      <div>
        <Outlet/>
      </div>
    </div>
  );
}
