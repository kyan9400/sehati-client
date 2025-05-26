import React from "react";

const doctors = [
  {
    id: 1,
    name: "Dr. Amina Al-Sayed",
    specialty: "Cardiology",
    phone: "+966 512 345 678",
    email: "amina@sehati.com",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    id: 2,
    name: "Dr. Khalid Al-Farhan",
    specialty: "Pediatrics",
    phone: "+966 567 890 123",
    email: "khalid@sehati.com",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 3,
    name: "Dr. Layla Hassan",
    specialty: "Dermatology",
    phone: "+966 501 234 567",
    email: "layla@sehati.com",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
  },
];

const Doctors = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Doctors</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {doctors.map((doctor) => (
          <div
            key={doctor.id}
            className="bg-white rounded-lg shadow p-4 flex flex-col items-center text-center"
          >
            <img
              src={doctor.image}
              alt={doctor.name}
              className="w-24 h-24 rounded-full shadow-md mb-4"
            />
            <h2 className="text-lg font-semibold text-purple-700">
              {doctor.name}
            </h2>
            <p className="text-sm text-gray-600">{doctor.specialty}</p>
            <p className="text-sm text-gray-500">{doctor.phone}</p>
            <p className="text-sm text-gray-500">{doctor.email}</p>

            <div className="mt-4 space-x-3">
              <button className="px-4 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm">
                View
              </button>
              <button className="px-4 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600 text-sm">
                Edit
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Doctors;
