import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./features/auth/Register";
import Login from "./features/auth/Login";
import Terms from "./features/legal/Terms";
import Privacy from "./features/legal/Privacy";
import Dashboard from "./features/dashboard/Dashboard";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
