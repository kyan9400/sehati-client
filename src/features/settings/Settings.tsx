import React from "react";

const Settings = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Settings</h1>
      <div className="bg-white shadow p-4 rounded-lg">
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium">
              Notification Email
            </label>
            <input
              type="email"
              className="input"
              placeholder="example@sehati.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Language</label>
            <select className="input">
              <option>English</option>
              <option>Arabic</option>
            </select>
          </div>
          <button className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default Settings;
