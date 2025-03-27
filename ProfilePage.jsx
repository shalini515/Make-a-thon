
// import React from "react";
// import { Pie, Bar } from "react-chartjs-2";
// import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement } from "chart.js";

// ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement);

// const investmentData = {
//   labels: ["Funds Raised", "Target Remaining"],
//   datasets: [
//     {
//       data: [75000, 25000],
//       backgroundColor: ["#4CAF50", "#FF9800"],
//       hoverBackgroundColor: ["#45a049", "#fb8c00"],
//     },
//   ],
// };

// const barData = {
//   labels: ["January", "February", "March", "April", "May"],
//   datasets: [
//     {
//       label: "Investment ($)",
//       data: [10000, 15000, 20000, 18000, 22000],
//       backgroundColor: "#4CAF50",
//     },
//   ],
// };

// function ProfilePage() {
//   return (
//     <div className="flex h-screen w-screen">
//       {/* Sidebar Navigation */}
//       <div className="w-64 bg-gray-900 text-white p-6 flex flex-col">
//         <h2 className="text-2xl font-bold">Startup Investor</h2>
//         <nav className="mt-6">
//           <a href="#" className="block py-2 hover:text-gray-400">Dashboard</a>
//           <a href="#" className="block py-2 hover:text-gray-400">Investments</a>
//           <a href="#" className="block py-2 hover:text-gray-400">Projects</a>
//           <a href="#" className="block py-2 hover:text-gray-400">Backers</a>
//           <a href="#" className="block py-2 hover:text-gray-400">Settings</a>
//         </nav>
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 p-8 bg-gray-100 overflow-auto">
//         {/* User Profile Section */}
//         <div className="bg-white shadow-md p-6 rounded-lg text-center max-w-4xl mx-auto">
//           <img
//             src="https://via.placeholder.com/150"
//             alt="User Profile"
//             className="w-32 h-32 rounded-full mx-auto border-4 border-gray-300"
//           />
//           <h2 className="text-3xl font-semibold mt-4">John Doe</h2>
//           <p className="text-gray-600">Founder & Lead Investor</p>
//         </div>

//         {/* Investment Overview Section */}
//         <div className="mt-6 grid grid-cols-3 gap-6">
//           {/* Investment Pie Chart */}
//           <div className="bg-white shadow-md p-6 rounded-lg flex flex-col items-center">
//             <h2 className="text-xl font-semibold mb-4">Investment Overview</h2>
//             <Pie data={investmentData} />
//           </div>

//           {/* Investment Growth Bar Chart */}
//           <div className="bg-white shadow-md p-6 rounded-lg flex flex-col items-center">
//             <h2 className="text-xl font-semibold mb-4">Investment Growth</h2>
//             <Bar data={barData} />
//           </div>

//           {/* Funding History Table */}
//           <div className="bg-white shadow-md p-6 rounded-lg">
//             <h2 className="text-xl font-semibold mb-4">Funding History</h2>
//             <table className="w-full border-collapse border border-gray-200 text-center">
//               <thead>
//                 <tr className="bg-gray-200">
//                   <th className="border p-3">Date</th>
//                   <th className="border p-3">Investor</th>
//                   <th className="border p-3">Amount</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 <tr>
//                   <td className="border p-3">March 15, 2025</td>
//                   <td className="border p-3">Alice Smith</td>
//                   <td className="border p-3">$10,000</td>
//                 </tr>
//                 <tr>
//                   <td className="border p-3">March 10, 2025</td>
//                   <td className="border p-3">Michael Johnson</td>
//                   <td className="border p-3">$25,000</td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>
//         </div>

        
//       </div>
//     </div>
//   );
// }

// export default ProfilePage;
import React, { useState } from "react";
import { Pie, Bar } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement } from "chart.js";
import { FiMenu } from "react-icons/fi";

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement);

const investmentData = {
  labels: ["Funds Raised", "Target Remaining"],
  datasets: [
    {
      data: [75000, 25000],
      backgroundColor: ["#4CAF50", "#FF9800"],
      hoverBackgroundColor: ["#45a049", "#fb8c00"],
    },
  ],
};

const barData = {
  labels: ["January", "February", "March", "April", "May"],
  datasets: [
    {
      label: "Investment ($)",
      data: [10000, 15000, 20000, 18000, 22000],
      backgroundColor: "#4CAF50",
    },
  ],
};

const fundingHistory = [
  { date: "March 15, 2025", investor: "Alice Smith", amount: "$10,000" },
  { date: "March 10, 2025", investor: "Michael Johnson", amount: "$25,000" },
  { date: "March 5, 2025", investor: "David Lee", amount: "$15,000" },
];

function ProfilePage() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen w-screen">
      {/* Sidebar Navigation */}
      <div className={`bg-gray-900 text-white p-6 flex flex-col transition-all duration-300 ${sidebarOpen ? "w-64" : "w-20"}`}>
        <button onClick={() => setSidebarOpen(!sidebarOpen)} className="mb-6 text-xl">
          <FiMenu />
        </button>
        {sidebarOpen && <h2 className="text-2xl font-bold">Investor Dashboard</h2>}
        <nav className="mt-6">
          {sidebarOpen && (
            <>
              <a href="#" className="block py-2 hover:text-gray-400">Dashboard</a>
              <a href="#" className="block py-2 hover:text-gray-400">Investments</a>
              <a href="#" className="block py-2 hover:text-gray-400">Projects</a>
              <a href="#" className="block py-2 hover:text-gray-400">Backers</a>
              <a href="#" className="block py-2 hover:text-gray-400">Settings</a>
            </>
          )}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8 bg-gray-100 overflow-auto">
        {/* User Profile Section */}
        <div className="bg-white shadow-md p-6 rounded-lg text-center max-w-4xl mx-auto">
          <img
            src="https://via.placeholder.com/150"
            alt="User Profile"
            className="w-32 h-32 rounded-full mx-auto border-4 border-gray-300"
          />
          <h2 className="text-3xl font-semibold mt-4">John Doe</h2>
          <p className="text-gray-600">Founder & Lead Investor</p>
        </div>

        {/* Investment Overview Section */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Investment Pie Chart */}
          <div className="bg-white shadow-md p-6 rounded-lg flex flex-col items-center">
            <h2 className="text-xl font-semibold mb-4">Investment Overview</h2>
            <Pie data={investmentData} />
          </div>

          {/* Investment Growth Bar Chart */}
          <div className="bg-white shadow-md p-6 rounded-lg flex flex-col items-center">
            <h2 className="text-xl font-semibold mb-4">Investment Growth</h2>
            <Bar data={barData} />
          </div>

          {/* Funding History Table */}
          <div className="bg-white shadow-md p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Funding History</h2>
            <table className="w-full border-collapse border border-gray-200 text-center">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border p-3">Date</th>
                  <th className="border p-3">Investor</th>
                  <th className="border p-3">Amount</th>
                </tr>
              </thead>
              <tbody>
                {fundingHistory.map((entry, index) => (
                  <tr key={index} className="hover:bg-gray-100">
                    <td className="border p-3">{entry.date}</td>
                    <td className="border p-3">{entry.investor}</td>
                    <td className="border p-3">{entry.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
