import React from "react";
import { Route, Routes } from "react-router-dom";
import TechsProvider from "../Contexts/TechContext";
import { Home } from "./Home";
import { Login } from "./Login";
import { RegisterUsers } from "./Register";
export const Router = () => {
  return (
    <TechsProvider>
      <Routes>
        <Route path={"/"} element={<Login />}></Route>
        <Route path={"/register"} element={<RegisterUsers />}></Route>
        <Route path={"/users"} element={<Home />}></Route>
      </Routes>
    </TechsProvider>
  );
};
