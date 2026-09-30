import TotalCard from "../assets/Components/TotalCard";
import Week1Report from "../assets/Components/Week1Report";
import RightReport from "../assets/Components/RightReport";
import TopProducts from "../assets/Components/TopProducts";
import TopCustomers from "../assets/Components/TopCustomers";
import RecentOrders from "../assets/Components/RecentOrders";
import LowStockProducts from "../assets/Components/LowStockProducts";

function Dashboard({ DarkMode }) {
  return (
    <div>
      {/* ================= Total Cards ================= */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        <TotalCard
          title="Total Sales"
          period="Last 7 days"
          value="$350K"
          label="Sales"
          percent="+10.4%"
          previous="$325K"
          DarkMode={DarkMode}
        />

        <TotalCard
          title="Total Orders"
          period="Last 7 days"
          value="10.7K"
          label="Orders"
          percent="+14.4%"
          previous="(7.6K)"
          DarkMode={DarkMode}
        />

        <TotalCard
          title="Pending & Canceled"
          period="Last 7 days"
          value="509"
          label="Pending"
          percent="+20%"
          previous="424"
          DarkMode={DarkMode}
        />
      </div>

      {/* ================= Reports ================= */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 mt-10">
        <div className="lg:col-span-8 min-w-0 w-full">
          <Week1Report DarkMode={DarkMode} />
        </div>

        <div className="lg:col-span-4 min-w-0 w-full">
          <RightReport DarkMode={DarkMode} />
        </div>
      </div>

      {/* ================= Top Products + Top Customers ================= */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-5">
        <TopProducts DarkMode={DarkMode} />
        <TopCustomers DarkMode={DarkMode} />
      </div>

      {/* ================= Recent Orders + Low Stock ================= */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-5">
        <RecentOrders DarkMode={DarkMode} />
        <LowStockProducts DarkMode={DarkMode} />
      </div>
    </div>
  );
}

export default Dashboard;