export default function Card({ props }) {
  // Destructuring the data from the props object
  const { userName, role, location } = props;

  return (
    <div className="flex justify-center items-center p-6">
      <div className="w-full max-w-sm bg-white rounded-2xl shadow-xl border border-gray-100 p-6 text-center transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
        
        {/* Placeholder Avatar Circle */}
        <div className="w-24 h-24 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-full mx-auto flex items-center justify-center text-white text-2xl font-bold shadow-md mb-4">
          {userName ? userName.charAt(0).toUpperCase() : "U"}
        </div>

        {/* User Name */}
        <h1 className="text-xl font-bold text-gray-800 tracking-tight">
          {userName}
        </h1>

        {/* Role / Job Title */}
        <h2 className="text-sm font-semibold text-indigo-600 uppercase tracking-wider mt-1">
          {role}
        </h2>

        {/* Location with a subtle icon-like layout */}
        <div className="flex items-center justify-center gap-1 mt-4 text-gray-500 text-sm">
          <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <p className="font-medium">{location}</p>
        </div>

        {/* Optional Action Button just to make it look complete */}
        <button className="mt-6 w-full py-2.5 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-medium text-sm rounded-xl shadow-sm transition-colors duration-200">
          Connect
        </button>

      </div>
    </div>
  );
}