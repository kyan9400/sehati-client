import React from "react";
import { Link, useLocation } from "react-router-dom";

const TopBar = () => {
  const location = useLocation();

  const linkClasses = (path: string) =>
    `px-4 py-2 rounded hover:bg-purple-100 ${
      location.pathname === path
        ? "text-purple-700 font-semibold"
        : "text-gray-700"
    }`;

  return (
    <div className="bg-white shadow-sm px-6 py-3 flex justify-between items-center">
      <h1 className="text-xl font-bold text-purple-700">Sehati</h1>
      <nav className="space-x-4">
        <Link to="/dashboard" className={linkClasses("/dashboard")}>
          Dashboard
        </Link>
        <Link to="/patients" className={linkClasses("/patients")}>
          Patients
        </Link>
        <Link to="/appointments" className={linkClasses("/appointments")}>
          Appointments
        </Link>
        <Link to="/doctors" className={linkClasses("/doctors")}>
          Doctors
        </Link>
        <Link to="/settings" className={linkClasses("/settings")}>
          Settings
        </Link>
      </nav>
    </div>
  );
};

export default TopBar;
