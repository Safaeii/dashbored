
import { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import TotalCard from "./TotalCard";
import Week1Report from "./Week1Report"
function DashboardLayout() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="min-h-screen bg-[#F8FAF9]">

      {/* ================= Sidebar ================= */}
<div className=" transition-all duration-300 ">
     <Sidebar
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
</div>

      {/* ================= Main Content ================= */}

      <div
        className={`
          min-h-screen
          transition-all
          duration-300
          ${isOpen ? "ml-64" : "ml-0"}
        `}
      >

        {/* ================= Header ================= */}
<div className="  transition-all duration-300 ease-in-out">
     <Header
          setIsOpen={setIsOpen}
          isOpen={isOpen}
        />

</div>
   
        {/* ================= Content ================= */}

        <main className="p-5">

          {/* ================= Total Cards ================= */}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5  transition-all duration-300 ease-in-out
              ">
              

            <TotalCard
              title="Total Sales"
              period="Last 7 days"
              value="$350K"
              label="Sales"
              percent="+10.4%"
              previous="$325K"
            />

            <TotalCard
              title="Total Orders"
              period="Last 7 days"
              value="10.7K"
              label="Orders"
              percent="+14.4%"
              previous="(7.6K)"
            />

            <TotalCard
              title="Pending & Canceled"
              period="Last 7 days"
              value="509"
              label="Pending"
              percent="+20%"
              previous="424"
            />

          </div>
          {/* =============== Week1Report===========*/}

<Week1Report/>

        </main>

      </div>
    </div>
  );
}

export default DashboardLayout;


