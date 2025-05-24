import React from "react";

const Logo: React.FC = () => (
  <div className="flex flex-col items-center mb-6">
    {/* Icon circle */}
    <div className="bg-gradient-to-br from-purple-500 to-indigo-500 p-4 rounded-full shadow-lg">
      <svg
        className="w-8 h-8 text-white"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <path
          d="M12 21C12 21 4 13.9 4 8.5C4 6 6 4 8.5 4C10 4 11 5 12 6C13 5 14 4 15.5 4C18 4 20 6 20 8.5C20 13.9 12 21 12 21Z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>

  </div>
);

export default Logo;
