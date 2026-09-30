import { useState } from "react";
import { Outlet } from "react-router-dom";

import Sidebar from "./Sidebar";
import Header from "./Header";

function DashboardLayout({ DarkMode, SetDarkMode }) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div
      className={`min-h-screen transition-colors duration-500 ${
        DarkMode
          ? "bg-gray-900 text-white"
          : "bg-white text-gray-900"
      }`}
    >
      {/* Sidebar */}
      <div className="transition-all duration-300">
        <Sidebar
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          DarkMode={DarkMode}
        />
      </div>

      {/* Main Content */}
      <div
        className={`
          min-h-screen
          transition-all
          duration-300
          ${isOpen ? "ml-64" : "ml-0"}
        `}
      >
        {/* Header */}
        <div className="transition-all duration-300 ease-in-out">
          <Header
            setIsOpen={setIsOpen}
            isOpen={isOpen}
            DarkMode={DarkMode}
            SetDarkMode={SetDarkMode}
          />
        </div>

        {/* Page Content */}
        <main className="p-5">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default DashboardLayout;