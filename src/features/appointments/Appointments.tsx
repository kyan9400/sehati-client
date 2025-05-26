import React, { useState } from "react";

interface Appointment {
  id: number;
  patient: string;
  doctor: string;
  date: string;
  time: string;
  status: "Confirmed" | "Pending";
}

const initialAppointments: Appointment[] = [
  {
    id: 1,
    patient: "Ahmed Ali",
    doctor: "Dr. Sarah",
    date: "2025-06-01",
    time: "10:00 AM",
    status: "Confirmed",
  },
  {
    id: 2,
    patient: "Layla Hussein",
    doctor: "Dr. Omar",
    date: "2025-06-02",
    time: "2:30 PM",
    status: "Pending",
  },
];

const Appointments = () => {
  const [appointments, setAppointments] =
    useState<Appointment[]>(initialAppointments);
  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);

  const [newAppointment, setNewAppointment] = useState<Appointment>({
    id: 0,
    patient: "",
    doctor: "",
    date: "",
    time: "",
    status: "Pending",
  });

  const filtered = appointments.filter((a) =>
    a.patient.toLowerCase().includes(search.toLowerCase())
  );

  const handleAdd = () => {
    if (
      !newAppointment.patient ||
      !newAppointment.date ||
      !newAppointment.time ||
      !newAppointment.doctor
    )
      return;

    setAppointments([
      ...appointments,
      { ...newAppointment, id: appointments.length + 1 },
    ]);

    setNewAppointment({
      id: 0,
      patient: "",
      doctor: "",
      date: "",
      time: "",
      status: "Pending",
    });

    setShowModal(false);
  };

  return (
    <div className="p-6">
      {/* Header + Search + Add */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Appointments</h1>
        <div className="flex flex-col sm:flex-row gap-4 mt-4 sm:mt-0">
          <input
            type="text"
            placeholder="Search by patient..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border px-3 py-2 rounded w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <button
            onClick={() => setShowModal(true)}
            className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
          >
            + Add Appointment
          </button>
        </div>
      </div>

      {/* Appointment Table */}
      <div className="overflow-x-auto bg-white rounded shadow">
        <table className="w-full table-auto text-left">
          <thead className="bg-purple-100 text-gray-700 text-sm">
            <tr>
              <th className="p-3">Patient</th>
              <th className="p-3">Doctor</th>
              <th className="p-3">Date</th>
              <th className="p-3">Time</th>
              <th className="p-3">Status</th>
            </tr>
          </thead>
          <tbody className="text-sm text-gray-800">
            {filtered.map((appt) => (
              <tr key={appt.id} className="border-t">
                <td className="p-3">{appt.patient}</td>
                <td className="p-3">{appt.doctor}</td>
                <td className="p-3">{appt.date}</td>
                <td className="p-3">{appt.time}</td>
                <td className="p-3">
                  <span
                    className={`px-2 py-1 rounded text-xs font-semibold ${
                      appt.status === "Confirmed"
                        ? "bg-green-100 text-green-600"
                        : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    {appt.status}
                  </span>
                </td>
              </tr>
            ))}
            {filtered.length === 0 && (
              <tr>
                <td colSpan={5} className="p-4 text-center text-gray-500">
                  No appointments found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Add Appointment Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white w-full max-w-md p-6 rounded shadow-lg">
            <h3 className="text-xl font-semibold mb-4 text-gray-700">
              Add Appointment
            </h3>

            <input
              type="text"
              placeholder="Patient Name"
              value={newAppointment.patient}
              onChange={(e) =>
                setNewAppointment({
                  ...newAppointment,
                  patient: e.target.value,
                })
              }
              className="w-full mb-3 p-2 border rounded"
            />

            <input
              type="text"
              placeholder="Doctor"
              value={newAppointment.doctor}
              onChange={(e) =>
                setNewAppointment({ ...newAppointment, doctor: e.target.value })
              }
              className="w-full mb-3 p-2 border rounded"
            />

            <input
              type="date"
              value={newAppointment.date}
              onChange={(e) =>
                setNewAppointment({ ...newAppointment, date: e.target.value })
              }
              className="w-full mb-3 p-2 border rounded"
            />

            <input
              type="time"
              value={newAppointment.time}
              onChange={(e) =>
                setNewAppointment({ ...newAppointment, time: e.target.value })
              }
              className="w-full mb-3 p-2 border rounded"
            />

            <select
              value={newAppointment.status}
              onChange={(e) =>
                setNewAppointment({
                  ...newAppointment,
                  status: e.target.value as "Confirmed" | "Pending",
                })
              }
              className="w-full mb-4 p-2 border rounded"
            >
              <option>Confirmed</option>
              <option>Pending</option>
            </select>

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

export default Appointments;
