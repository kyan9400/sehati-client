import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./features/auth/Register";
import Login from "./features/auth/Login";
import Terms from "./features/legal/Terms";
import Privacy from "./features/legal/Privacy";
import Dashboard from "./features/dashboard/Dashboard";
import Patients from "./features/patients/Patients";
import Appointments from "./features/appointments/Appointments";
import Doctors from "./features/doctors/Doctors";
import Settings from "./features/settings/Settings";
import MainLayout from "./layouts/MainLayout";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* ✅ Default route shows Login */}
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* ✅ Pages with TopBar */}
        <Route element={<MainLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/patients" element={<Patients />} />
          <Route path="/appointments" element={<Appointments />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
