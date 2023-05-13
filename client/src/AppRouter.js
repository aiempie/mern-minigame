import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "~/pages/views/Home";
import Login from "~/pages/auth/Login";
import ForgotPassword from "~/pages/auth/ForgotPassword";

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login isRegister={false} />} />
        <Route path="/register" element={<Login isRegister={true} />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
    </Router>
  );
}
