import { useState } from "react";
import Card from "./Card";

export default function CardHome() {
  const [data,setData]=useState([])
  const [userName, setUserName] = useState("");
  const [userRole, setUserRole] = useState("");
  const [userLocation, setUserLocation] = useState("");

  const userData = {
    name: userName,
    role: userRole,
    location: userLocation,
  };
  function handleCard(e) {
    e.preventDefault();
    if (!userName || !userRole || !userLocation) return;
    setData((prev)=>[...prev,userData])
    setUserLocation("");
    setUserName("");
    setUserRole("")
  }
  return (
   <div className="min-h-screen bg-gray-50 p-8">
      {/* HEADER SECTION */}
      <div className="max-w-6xl mx-auto mb-10 text-center">
        <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">User Dashboard</h1>
        <p className="text-gray-500 mt-2">Fill the form horizontally to add user profile cards below.</p>
      </div>

      {/* 1. HORIZONTAL FORM BLOCK */}
      <div className="max-w-6xl mx-auto bg-white p-5 rounded-xl shadow-sm border border-gray-100 mb-10">
        <form onSubmit={handleCard} className="flex flex-col md:flex-row items-end gap-4">
          
          <div className="flex-1 w-full">
            <label className="block text-xs font-semibold text-gray-600 uppercase mb-1.5 ml-1">Name</label>
            <input
              type="text"
              placeholder="e.g. John Doe"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-colors"
            />
          </div>

          <div className="flex-1 w-full">
            <label className="block text-xs font-semibold text-gray-600 uppercase mb-1.5 ml-1">Role</label>
            <input
              type="text"
              placeholder="e.g. Developer"
              value={userRole}
              onChange={(e) => setUserRole(e.target.value)}
              className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-colors"
            />
          </div>

          <div className="flex-1 w-full">
            <label className="block text-xs font-semibold text-gray-600 uppercase mb-1.5 ml-1">Location</label>
            <input
              type="text"
              placeholder="e.g. New York, NY"
              value={userLocation}
              onChange={(e) => setUserLocation(e.target.value)}
              className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-colors"
            />
          </div>

          <button 
            type="submit"
            className="w-full md:w-auto px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-medium text-sm rounded-lg shadow-sm transition-colors cursor-pointer h-[42px] whitespace-nowrap"
          >
            Create Card
          </button>
        </form>
      </div>

      {/* CARDS DISPLAY SECTION */}
      <div className="max-w-6xl mx-auto">
        {data.length === 0 ? (
          <div className="text-center py-12 border-2 border-dashed border-gray-200 rounded-xl bg-white">
            <p className="text-gray-400 font-medium">No profile cards created yet.</p>
          </div>
        ) : (
          // Responsive layout grid: 1 column on mobile, 2 on tablet, 3 on desktop
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.map((user, index) => (
              // 4. Fixed: Added key prop using index (ideally use a unique ID like crypto.randomUUID())
              <Card key={index} props={user} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
