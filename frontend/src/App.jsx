import { useState } from "react";
import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Dashboard from "./components/dashboard/Dashboard";
import UserManagement from "./components/userManagement/UserManagement";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/user" element={<UserManagement />} />
      </Routes>
    </>
  );
}

export default App;
