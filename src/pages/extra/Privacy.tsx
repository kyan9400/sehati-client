import React from "react";

const Privacy = () => {
  return (
    <div className="max-w-3xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-6 text-purple-700">
        Privacy Policy
      </h1>
      <p className="text-gray-700 leading-relaxed">
        We value your privacy. Here is how we handle your data:
      </p>
      <ul className="list-disc pl-5 mt-4 text-gray-700">
        <li>We do not share your data with third parties.</li>
        <li>Your information is stored securely.</li>
        <li>You can contact us to delete your data.</li>
      </ul>
    </div>
  );
};

export default Privacy;
