import React, { useState } from "react";

interface Patient {
  id: number;
  name: string;
  age: number;
  gender: string;
  phone: string;
  status: "Active" | "Inactive";
}

const initialPatients: Patient[] = [
  {
    id: 1,
    name: "Mohammed Al-Harbi",
    age: 34,
    gender: "Male",
    phone: "+966 501 234 567",
    status: "Active",
  },
  {
    id: 2,
    name: "Sara Al-Qahtani",
    age: 28,
    gender: "Female",
    phone: "+966 502 345 678",
    status: "Inactive",
  },
];

const Patients = () => {
  const [patients, setPatients] = useState<Patient[]>(initialPatients);
  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);

  const [newPatient, setNewPatient] = useState<Patient>({
    id: 0,
    name: "",
    age: 0,
    gender: "Male",
    phone: "",
    status: "Active",
  });

  const filtered = patients.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleAdd = () => {
    if (!newPatient.name || !newPatient.phone) return;
    setPatients([...patients, { ...newPatient, id: patients.length + 1 }]);
    setNewPatient({
      id: 0,
      name: "",
      age: 0,
      gender: "Male",
      phone: "",
      status: "Active",
    });
    setShowModal(false);
  };

  return (
    <div className="p-6">
      {/* Header + Search + Add */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Patients</h1>
        <div className="flex flex-col sm:flex-row gap-4 mt-4 sm:mt-0">
          <input
            type="text"
            placeholder="Search by name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border px-3 py-2 rounded w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <button
            onClick={() => setShowModal(true)}
            className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
          >
            + Add Patient
          </button>
        </div>
      </div>

      {/* Patient Table */}
      <div className="overflow-x-auto bg-white rounded shadow">
        <table className="w-full text-left table-auto">
          <thead className="bg-gray-100 text-gray-700 text-sm">
            <tr>
              <th className="p-3">Name</th>
              <th className="p-3">Age</th>
              <th className="p-3">Gender</th>
              <th className="p-3">Phone</th>
              <th className="p-3">Status</th>
              <th className="p-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="text-sm text-gray-800">
            {filtered.map((patient) => (
              <tr key={patient.id} className="border-t">
                <td className="p-3 font-medium">{patient.name}</td>
                <td className="p-3">{patient.age}</td>
                <td className="p-3">{patient.gender}</td>
                <td className="p-3">{patient.phone}</td>
                <td className="p-3">
                  <span
                    className={`px-2 py-1 rounded text-xs font-semibold ${
                      patient.status === "Active"
                        ? "bg-green-100 text-green-600"
                        : "bg-red-100 text-red-600"
                    }`}
                  >
                    {patient.status}
                  </span>
                </td>
                <td className="p-3 text-center space-x-2">
                  <button className="px-3 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600">
                    View
                  </button>
                  <button className="px-3 py-1 text-sm bg-yellow-500 text-white rounded hover:bg-yellow-600">
                    Edit
                  </button>
                </td>
              </tr>
            ))}
            {filtered.length === 0 && (
              <tr>
                <td colSpan={6} className="p-4 text-center text-gray-500">
                  No patients found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white w-full max-w-md p-6 rounded shadow-lg">
            <h3 className="text-xl font-semibold mb-4 text-gray-700">
              Add New Patient
            </h3>
            <input
              type="text"
              placeholder="Full Name"
              value={newPatient.name}
              onChange={(e) =>
                setNewPatient({ ...newPatient, name: e.target.value })
              }
              className="w-full mb-3 p-2 border rounded"
            />
            <input
              type="number"
              placeholder="Age"
              value={newPatient.age}
              onChange={(e) =>
                setNewPatient({ ...newPatient, age: Number(e.target.value) })
              }
              className="w-full mb-3 p-2 border rounded"
            />
            <select
              value={newPatient.gender}
              onChange={(e) =>
                setNewPatient({
                  ...newPatient,
                  gender: e.target.value as "Male" | "Female",
                })
              }
              className="w-full mb-3 p-2 border rounded"
            >
              <option>Male</option>
              <option>Female</option>
            </select>
            <input
              type="text"
              placeholder="Phone Number"
              value={newPatient.phone}
              onChange={(e) =>
                setNewPatient({ ...newPatient, phone: e.target.value })
              }
              className="w-full mb-3 p-2 border rounded"
            />
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={handleAdd}
                className="px-4 py-2 rounded bg-purple-600 text-white hover:bg-purple-700"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Patients;
