import React from "react";

const KPICard = ({ title, value }: { title: string; value: string }) => {
  return (
    <div className="bg-white p-4 rounded shadow text-center">
      <p className="text-sm text-gray-500">{title}</p>
      <h3 className="text-2xl font-bold text-purple-700">{value}</h3>
    </div>
  );
};

export default KPICard;
