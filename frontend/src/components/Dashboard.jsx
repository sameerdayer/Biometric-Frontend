import React, { useState, useEffect } from "react";
import { useSidebar } from "../context/SidebarContext";
import Navbar from "./Common/Navbar";
import Header from "./Common/Header";

const Dashboard = () => {
  const { isSidebarVisible, toggleSidebar } = useSidebar();

  // Example data: You can fetch this from an API
  const [stats, setStats] = useState({
    totalEnrollments: 200,
    totalTeachers: 20,
    totalUsers: 220,
    totalPresent: 180,
    totalAbsent: 15,
  });

  useEffect(() => {
    // Simulate fetching data from backend
    // setStats({ totalEnrollments: 250, totalTeachers: 30, totalUsers: 280, totalPresent: 240, totalAbsent: 20 });
  }, []);

  return (
    <>
      <Header toggleSidebar={toggleSidebar} />
      <Navbar isSidebarVisible={isSidebarVisible} />
      <div className={`content-wrapper ${isSidebarVisible ? "" : "full-width"}`}>
        <main>
          {/* Dashboard Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 p-4">
            {/* Total Enrollments Card */}
            <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300">
              <h2 className="text-xl font-semibold text-gray-800">Total Enrollments</h2>
              <p className="text-3xl font-bold text-blue-600">{stats.totalEnrollments}</p>
            </div>

            {/* Total Teachers Card */}
            <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300">
              <h2 className="text-xl font-semibold text-gray-800">Total Teachers</h2>
              <p className="text-3xl font-bold text-green-600">{stats.totalTeachers}</p>
            </div>

            {/* Total Users Card */}
            <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300">
              <h2 className="text-xl font-semibold text-gray-800">Total Users</h2>
              <p className="text-3xl font-bold text-yellow-600">{stats.totalUsers}</p>
            </div>

            {/* Total Present Card */}
            <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300">
              <h2 className="text-xl font-semibold text-gray-800">Total Present</h2>
              <p className="text-3xl font-bold text-green-500">{stats.totalPresent}</p>
            </div>

            {/* Total Absent Card */}
            <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300">
              <h2 className="text-xl font-semibold text-gray-800">Total Absent</h2>
              <p className="text-3xl font-bold text-red-500">{stats.totalAbsent}</p>
            </div>
          </div>

          {/* Attendance Summary */}
          <div className="bg-white p-4 rounded-lg shadow-md mt-8 hover:shadow-xl hover:scale-105 transition-all duration-300">
            <h2 className="text-lg font-semibold">Attendance Summary</h2>
            <div className="flex justify-between items-center mt-4">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-green-500">{stats.totalPresent}</h3>
                <p className="text-gray-600">Present</p>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-red-500">{stats.totalAbsent}</h3>
                <p className="text-gray-600">Absent</p>
              </div>
            </div>
          </div>

          {/* Biometric System Status */}
          <div className="bg-white p-4 rounded-lg shadow-md mt-8 hover:shadow-xl hover:scale-105 transition-all duration-300">
            <h2 className="text-lg font-semibold">Biometric System Status</h2>
            <div className="flex justify-between items-center mt-4">
              <div className="text-center">
                <h3 className="text-xl font-bold text-green-500">All Systems Online</h3>
                <p className="text-gray-600">Device status: Online</p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-red-500">No Issues</h3>
                <p className="text-gray-600">Recent errors: None</p>
              </div>
            </div>
          </div>

          {/* Recent Activities */}
          <div className="bg-white p-4 rounded-lg shadow-md mt-8 hover:shadow-xl hover:scale-105 transition-all duration-300">
            <h2 className="text-lg font-semibold">Recent Activities</h2>
            <ul className="mt-4">
              <li className="flex justify-between py-2 border-b hover:bg-gray-100">
                <span>Employee 001: Clock-in</span>
                <span className="text-gray-600">9:00 AM</span>
              </li>
              <li className="flex justify-between py-2 border-b hover:bg-gray-100">
                <span>Employee 002: Clock-out</span>
                <span className="text-gray-600">5:00 PM</span>
              </li>
              <li className="flex justify-between py-2 border-b hover:bg-gray-100">
                <span>Student 025: Late Clock-in</span>
                <span className="text-gray-600">9:30 AM</span>
              </li>
            </ul>
          </div>
        </main>
      </div>
    </>
  );
};

export default Dashboard;
// import React, { useEffect, useState } from "react";
// import Navbar from "./Common/Navbar";
// import Header from "./Common/Header";
// import { useSidebar } from "../context/SidebarContext";

// const Dashboard = () => {
//   const { isSidebarVisible, toggleSidebar } = useSidebar();

//   return (
//     <>
//       <Header toggleSidebar={toggleSidebar} />

//       <Navbar isSidebarVisible={isSidebarVisible} />

//       <div
//         className={`content-wrapper ${isSidebarVisible ? "" : "full-width"}`}
//       >
//         <main>
//           <div className="bg-blue-500">Dashboard</div>
//         </main>
//       </div>
//     </>
//   );
// };

// export default Dashboard;