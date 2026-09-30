import { useState } from "react";

import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import DashboardLayout from "./assets/Components/DashbordLayout";

import Dashboard from "./pages/Dashboard";
import Orders from "./pages/Orders";
import Customers from "./pages/Customers";
import Products from "./pages/Products";
import Categories from "./pages/Categories";
import Inventory from "./pages/Inventory";
import SalesAnalytics from "./pages/SalesAnalytics";
import Settings from "./pages/Settings";
import Help from "./pages/Help";

function App() {
  const [DarkMode, SetDarkMode] = useState(false);

  return (
    <BrowserRouter>
      <Routes>

        {/* ================= Main Layout ================= */}

        <Route
          element={
            <DashboardLayout
              DarkMode={DarkMode}
              SetDarkMode={SetDarkMode}
            />
          }
        >

          {/* Dashboard */}
          <Route
            path="/dashboard"
            element={<Dashboard DarkMode={DarkMode} />}
          />

          {/* Orders */}
          <Route
            path="/orders"
            element={<Orders DarkMode={DarkMode} />}
          />

          {/* Customers */}
          <Route
            path="/customers"
            element={<Customers DarkMode={DarkMode} />}
          />

          {/* Products */}
          <Route
            path="/products"
            element={<Products DarkMode={DarkMode} />}
          />

          {/* Categories */}
          <Route
            path="/categories"
            element={<Categories DarkMode={DarkMode} />}
          />

          {/* Inventory */}
          <Route
            path="/inventory"
            element={<Inventory DarkMode={DarkMode} />}
          />

          {/* Sales Analytics */}
          <Route
            path="/sales-analytics"
            element={<SalesAnalytics DarkMode={DarkMode} />}
          />

          {/* Settings */}
          <Route
            path="/settings"
            element={<Settings DarkMode={DarkMode} />}
          />

          {/* Help & Support */}
          <Route
            path="/help"
            element={<Help DarkMode={DarkMode} />}
          />

        </Route>

        {/* ================= Default Route ================= */}

        <Route
          path="/"
          element={
            <Navigate
              to="/dashboard"
              replace
            />
          }
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;