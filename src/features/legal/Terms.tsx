import React from "react";

const Terms = () => {
  return (
    <div className="max-w-3xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-6 text-purple-700">
        Terms of Service
      </h1>
      <p className="text-gray-700 leading-relaxed">
        Welcome to Sehati. By using this system, you agree to the following
        terms...
      </p>
      <ul className="list-disc pl-5 mt-4 text-gray-700">
        <li>You agree not to misuse the system.</li>
        <li>Your data will be stored securely.</li>
        <li>These terms are subject to change.</li>
      </ul>
    </div>
  );
};

export default Terms;
