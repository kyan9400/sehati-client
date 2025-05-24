import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // ✅ Normally you'd validate user credentials here
    // For now, redirect to dashboard directly
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-white">
      <div className="w-full max-w-md p-8 bg-white rounded-xl shadow-xl">
        {/* Logo & Heading */}
        <div className="flex flex-col items-center mb-6">
          <div className="bg-purple-600 text-white w-14 h-14 flex items-center justify-center rounded-full text-3xl shadow">
            💜
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mt-4">Sehati</h2>
          <p className="text-sm text-gray-500">Clinic Management System</p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit}>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email Address
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full p-2 mb-4 border border-gray-300 rounded"
            required
          />

          <label className="block text-sm font-medium text-gray-700 mb-1">
            Password
          </label>
          <input
            type="password"
            placeholder="Enter your password"
            className="w-full p-2 mb-4 border border-gray-300 rounded"
            required
          />

          <div className="flex items-center justify-between mb-4 text-sm">
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="form-checkbox" />
              <span>Remember me</span>
            </label>
            <button type="button" className="text-purple-600 hover:underline">
              Forgot password?
            </button>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white py-2 rounded shadow hover:opacity-90 transition"
          >
            Sign In 🚀
          </button>
        </form>

        {/* Signup link */}
        <p className="mt-4 text-sm text-center text-gray-600">
          Don’t have an account?{" "}
          <Link to="/register" className="text-purple-600 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
