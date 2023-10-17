import React from "react";
import Header from "../Components/Header/Header";
import Navbar from "../Components/NavBar/Navbar";
import { Outlet } from "react-router-dom";

export default function MainLayOuts() {
  return (
    <div className="max-w-6xl mx-auto bg-red-100 m-2">
      <div>
        <Header />
      </div>
      <div>
        <Navbar />
      </div>
      <div>
        <Outlet/>
      </div>
    </div>
  );
}
