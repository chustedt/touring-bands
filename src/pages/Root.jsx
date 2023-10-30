import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

const Root = () => {
  return (
    <>
      <NavBar />
      <main id="app">
        <Outlet />
      </main>
    </>
  );
};

export default Root;
