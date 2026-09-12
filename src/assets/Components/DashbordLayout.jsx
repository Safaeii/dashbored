

// import { useState } from "react";
// import Sidebar from "./Sidebar";
// import Header from "./Header";

// function DashboardLayout() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div className="flex min-h-screen">

//       {/* Sidebar */}
//       <Sidebar isOpen={isOpen} />

//       <div className="flex-1">

//         {/* Header */}
//         <Header setIsOpen={setIsOpen} />

//         {/* Content */}
//         <main className="p-5">
//           {/* بقیه محتوای داشبورد */}
//         </main>

//       </div>
//     </div>
//   );
// }

// export default DashboardLayout;
import { useState } from "react";
import Sidebar from "./Sidebar"
import Header from "./Header"

function DashboardLayout() {

  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="min-h-screen bg-[#F8FAF9]">

      {/* ================= Sidebar ================= */}

      <Sidebar
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />

      {/* ================= Main Content ================= */}

      <div
        className={`
          min-h-screen
          transition-all
          duration-300
          ${isOpen ? "mr-64" : "mr-0"}
        `}
      >

        {/* ================= Header ================= */}

        <Header
          setIsOpen={setIsOpen}
        />

        {/* ================= Content ================= */}

        <main className="p-5">
          {/* <h1 className="text-xl font-bold text-[#023337]">
            Dashboard
          </h1> */}
        </main>

      </div>

    </div>
  );
}

export default DashboardLayout;
