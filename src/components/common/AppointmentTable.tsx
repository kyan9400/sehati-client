import React from "react";

const AppointmentTable = () => {
  return (
    <div className="bg-white p-4 rounded shadow overflow-x-auto">
      <h2 className="text-lg font-semibold mb-4">Recent Appointments</h2>
      <table className="w-full table-auto text-sm">
        <thead>
          <tr className="text-left text-gray-600 border-b">
            <th className="p-2">Patient</th>
            <th className="p-2">Doctor</th>
            <th className="p-2">Date</th>
            <th className="p-2">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-2">John Doe</td>
            <td className="p-2">Dr. Smith</td>
            <td className="p-2">2025-05-25</td>
            <td className="p-2 text-green-600">Confirmed</td>
          </tr>
          <tr>
            <td className="p-2">Jane Roe</td>
            <td className="p-2">Dr. Ali</td>
            <td className="p-2">2025-05-24</td>
            <td className="p-2 text-yellow-600">Pending</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default AppointmentTable;
