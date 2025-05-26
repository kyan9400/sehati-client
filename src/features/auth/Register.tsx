// src/pages/auth/Register.tsx
import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../components/common/Logo";
import Modal from "../../components/common/Modal";

const Register = () => {
  const [showTerms, setShowTerms] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-100">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg px-8 py-10 text-center">
        <Logo />

        <h2 className="text-2xl font-bold text-gray-800">Join Sehati</h2>
        <p className="text-sm text-gray-500 mb-6">
          Create your clinic management account
        </p>

        <form className="text-left">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full mb-3 p-2 border border-gray-300 rounded"
          />
          <select className="w-full mb-3 p-2 border border-gray-300 rounded">
            <option>Patient</option>
            <option>Doctor</option>
            <option>Admin</option>
          </select>
          <input
            type="email"
            placeholder="Email Address"
            className="w-full mb-3 p-2 border border-gray-300 rounded"
          />

          <input
            type="password"
            placeholder="Create a strong password"
            className="w-full mb-3 p-2 border border-gray-300 rounded"
          />
          <input
            type="password"
            placeholder="Confirm your password"
            className="w-full mb-3 p-2 border border-gray-300 rounded"
          />

          <div className="flex items-start text-sm mb-4">
            <input type="checkbox" className="mr-2 mt-1" />
            <p>
              I agree to the{" "}
              <button
                type="button"
                onClick={() => setShowTerms(true)}
                className="text-purple-600 underline hover:text-purple-800"
              >
                Terms of Service
              </button>{" "}
              and{" "}
              <button
                type="button"
                onClick={() => setShowPrivacy(true)}
                className="text-purple-600 underline hover:text-purple-800"
              >
                Privacy Policy
              </button>
              .
            </p>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-500 to-purple-700 text-white py-2 rounded-md font-semibold hover:opacity-90"
          >
            Create Account
          </button>
        </form>

        <p className="text-sm mt-6 text-gray-600">
          Already have an account?{" "}
          <Link to="/login" className="text-purple-600 hover:underline">
            Sign in
          </Link>
        </p>
      </div>

      {/* Terms Modal */}
      <Modal
        isOpen={showTerms}
        onClose={() => setShowTerms(false)}
        title="Terms of Service"
      >
        <ul className="list-disc pl-5 text-left text-sm text-gray-600">
          <li>You agree not to misuse the system.</li>
          <li>Your data will be stored securely.</li>
          <li>These terms may change without notice.</li>
        </ul>
      </Modal>

      {/* Privacy Modal */}
      <Modal
        isOpen={showPrivacy}
        onClose={() => setShowPrivacy(false)}
        title="Privacy Policy"
      >
        <ul className="list-disc pl-5 text-left text-sm text-gray-600">
          <li>No data is shared with third parties.</li>
          <li>Everything is stored securely.</li>
          <li>You may request data deletion anytime.</li>
        </ul>
      </Modal>
    </div>
  );
};

export default Register;
