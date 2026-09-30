import { NavLink } from "react-router-dom";

import {
  House,
  Package,
  UsersRound,
  ShoppingCartPlus,
  Tags,
  Boxes,
  BarChart3,
  Settings,
  CircleHelp,
} from "lucide-react";

function Sidebar({
  isOpen,
  setIsOpen,
  DarkMode,
}) {
  // ================= MAIN MENU =================

  const menuItems = [
    {
      title: "Dashboard",
      path: "/dashboard",
      icon: House,
    },
    {
      title: "Order Management",
      path: "/orders",
      icon: Package,
    },
    {
      title: "Customers",
      path: "/customers",
      icon: UsersRound,
    },
  ];

  // ================= PRODUCTS =================

  const productItems = [
    {
      title: "Products",
      path: "/products",
      icon: ShoppingCartPlus,
    },
    {
      title: "Categories",
      path: "/categories",
      icon: Tags,
    },
    {
      title: "Inventory",
      path: "/inventory",
      icon: Boxes,
    },
  ];

  // ================= ANALYTICS =================

  const analyticsItems = [
    {
      title: "Sales Analytics",
      path: "/sales-analytics",
      icon: BarChart3,
    },
  ];

  // ================= SETTINGS =================

  const settingsItems = [
    {
      title: "Settings",
      path: "/settings",
      icon: Settings,
    },
    {
      title: "Help & Support",
      path: "/help",
      icon: CircleHelp,
    },
  ];

  return (
    <aside
      className={`
        fixed
        top-0
        left-0
        z-50
        h-screen
        w-64
        overflow-y-auto
        transition-all
        duration-300
        border-r

        ${
          DarkMode
            ? "bg-gray-800 text-white border-gray-700"
            : "bg-white text-gray-800 border-gray-200"
        }

        ${
          isOpen
            ? "translate-x-0"
            : "-translate-x-full"
        }
      `}
    >

      {/* ================= HEADER ================= */}

      <div
        className={`
          flex
          items-center
          justify-between
          p-5
          border-b

          ${
            DarkMode
              ? "border-gray-700"
              : "border-gray-200"
          }
        `}
      >
        <h1 className="text-xl font-bold">
          Dashboard
        </h1>

        <button
          onClick={() => setIsOpen(false)}
          className="
            text-xl
            hover:opacity-70
            transition
          "
        >
          ✕
        </button>
      </div>

      {/* ================= NAVIGATION ================= */}

      <nav className="p-4">

        {/* ================= MAIN MENU ================= */}

        <div className="mb-6">

          <p
            className={`
              text-xs
              font-semibold
              mb-3

              ${
                DarkMode
                  ? "text-gray-400"
                  : "text-gray-500"
              }
            `}
          >
            MAIN MENU
          </p>

          <div className="space-y-2">

            {menuItems.map((item) => {
              const Icon = item.icon;

              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `
                    flex
                    items-center
                    gap-3
                    px-4
                    py-3
                    rounded-xl
                    transition-all
                    duration-200

                    ${
                      isActive
                        ? "bg-[#4EA674] text-white"
                        : DarkMode
                        ? "text-gray-300 hover:bg-gray-700"
                        : "text-gray-600 hover:bg-gray-100"
                    }
                    `
                  }
                >
                  <Icon size={20} />

                  <span className="text-sm font-medium">
                    {item.title}
                  </span>
                </NavLink>
              );
            })}

          </div>
        </div>

        {/* ================= PRODUCTS ================= */}

        <div className="mb-6">

          <p
            className={`
              text-xs
              font-semibold
              mb-3

              ${
                DarkMode
                  ? "text-gray-400"
                  : "text-gray-500"
              }
            `}
          >
            PRODUCTS
          </p>

          <div className="space-y-2">

            {productItems.map((item) => {
              const Icon = item.icon;

              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `
                    flex
                    items-center
                    gap-3
                    px-4
                    py-3
                    rounded-xl
                    transition-all
                    duration-200

                    ${
                      isActive
                        ? "bg-[#4EA674] text-white"
                        : DarkMode
                        ? "text-gray-300 hover:bg-gray-700"
                        : "text-gray-600 hover:bg-gray-100"
                    }
                    `
                  }
                >
                  <Icon size={20} />

                  <span className="text-sm font-medium">
                    {item.title}
                  </span>
                </NavLink>
              );
            })}

          </div>
        </div>

        {/* ================= ANALYTICS ================= */}

        <div className="mb-6">

          <p
            className={`
              text-xs
              font-semibold
              mb-3

              ${
                DarkMode
                  ? "text-gray-400"
                  : "text-gray-500"
              }
            `}
          >
            ANALYTICS
          </p>

          <div className="space-y-2">

            {analyticsItems.map((item) => {
              const Icon = item.icon;

              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `
                    flex
                    items-center
                    gap-3
                    px-4
                    py-3
                    rounded-xl
                    transition-all
                    duration-200

                    ${
                      isActive
                        ? "bg-[#4EA674] text-white"
                        : DarkMode
                        ? "text-gray-300 hover:bg-gray-700"
                        : "text-gray-600 hover:bg-gray-100"
                    }
                    `
                  }
                >
                  <Icon size={20} />

                  <span className="text-sm font-medium">
                    {item.title}
                  </span>
                </NavLink>
              );
            })}

          </div>
        </div>

        {/* ================= SETTINGS ================= */}

        <div className="mb-6">

          <p
            className={`
              text-xs
              font-semibold
              mb-3

              ${
                DarkMode
                  ? "text-gray-400"
                  : "text-gray-500"
              }
            `}
          >
            SETTINGS
          </p>

          <div className="space-y-2">

            {settingsItems.map((item) => {
              const Icon = item.icon;

              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `
                    flex
                    items-center
                    gap-3
                    px-4
                    py-3
                    rounded-xl
                    transition-all
                    duration-200

                    ${
                      isActive
                        ? "bg-[#4EA674] text-white"
                        : DarkMode
                        ? "text-gray-300 hover:bg-gray-700"
                        : "text-gray-600 hover:bg-gray-100"
                    }
                    `
                  }
                >
                  <Icon size={20} />

                  <span className="text-sm font-medium">
                    {item.title}
                  </span>
                </NavLink>
              );
            })}

          </div>
        </div>

      </nav>
    </aside>
  );
}

export default Sidebar;