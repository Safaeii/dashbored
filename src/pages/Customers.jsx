import { useState } from "react";

import {
  Search,
  Eye,
} from "lucide-react";

const initialCustomers = [
  {
    id: 1,
    name: "John Smith",
    email: "john.smith@example.com",
    phone: "+1 555 123 4567",
    orders: 12,
    totalSpent: 1450,
    status: "Active",
  },
  {
    id: 2,
    name: "Emily Johnson",
    email: "emily.johnson@example.com",
    phone: "+1 555 234 5678",
    orders: 8,
    totalSpent: 920,
    status: "Active",
  },
  {
    id: 3,
    name: "Michael Brown",
    email: "michael.brown@example.com",
    phone: "+1 555 345 6789",
    orders: 5,
    totalSpent: 640,
    status: "Inactive",
  },
  {
    id: 4,
    name: "Sarah Wilson",
    email: "sarah.wilson@example.com",
    phone: "+1 555 456 7890",
    orders: 15,
    totalSpent: 1870,
    status: "Active",
  },
  {
    id: 5,
    name: "David Miller",
    email: "david.miller@example.com",
    phone: "+1 555 567 8901",
    orders: 3,
    totalSpent: 320,
    status: "Inactive",
  },
  {
    id: 6,
    name: "Olivia Davis",
    email: "olivia.davis@example.com",
    phone: "+1 555 678 9012",
    orders: 10,
    totalSpent: 1260,
    status: "Active",
  },
  {
    id: 7,
    name: "James Anderson",
    email: "james.anderson@example.com",
    phone: "+1 555 789 0123",
    orders: 7,
    totalSpent: 780,
    status: "Active",
  },
  {
    id: 8,
    name: "Sophia Taylor",
    email: "sophia.taylor@example.com",
    phone: "+1 555 890 1234",
    orders: 4,
    totalSpent: 510,
    status: "Inactive",
  },
];

function Customers({ DarkMode }) {
  const [customers] = useState(initialCustomers);

  const [search, setSearch] = useState("");

  const [statusFilter, setStatusFilter] =
    useState("All");

  // -----------------------------
  // Search + Filter
  // -----------------------------

  const filteredCustomers = customers.filter(
    (customer) => {
      const searchValue =
        search.toLowerCase();

      const matchesSearch =
        customer.name
          .toLowerCase()
          .includes(searchValue) ||
        customer.email
          .toLowerCase()
          .includes(searchValue) ||
        customer.phone
          .toLowerCase()
          .includes(searchValue);

      const matchesStatus =
        statusFilter === "All" ||
        customer.status === statusFilter;

      return (
        matchesSearch &&
        matchesStatus
      );
    }
  );

  // -----------------------------
  // Status Style
  // -----------------------------

  const getStatusStyle = (status) => {
    if (status === "Active") {
      return DarkMode
        ? "bg-green-900/40 text-green-400"
        : "bg-green-100 text-green-700";
    }

    return DarkMode
      ? "bg-gray-700 text-gray-300"
      : "bg-gray-100 text-gray-600";
  };

  return (
    <div>

      {/* =========================
          Page Header
      ========================== */}

      <div className="mb-6">

        <h1
          className={`text-2xl font-bold ${
            DarkMode
              ? "text-white"
              : "text-gray-900"
          }`}
        >
          Customers
        </h1>

        <p
          className={`text-sm mt-1 ${
            DarkMode
              ? "text-gray-400"
              : "text-gray-500"
          }`}
        >
          Manage and view your customers
        </p>

      </div>

      {/* =========================
          Search + Filter
      ========================== */}

      <div className="
        flex
        flex-col
        md:flex-row
        gap-4
        mb-6
      ">

        {/* Search */}

        <div className="relative w-full md:w-1/2">

          <Search
            size={19}
            className={`
              absolute
              left-4
              top-1/2
              -translate-y-1/2
              ${
                DarkMode
                  ? "text-gray-500"
                  : "text-gray-400"
              }
            `}
          />

          <input
            type="text"
            placeholder="Search by name, email or phone..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            className={`
              w-full
              pl-11
              pr-4
              py-3
              rounded-xl
              border
              outline-none
              transition
              ${
                DarkMode
                  ? "bg-gray-800 border-gray-700 text-white placeholder-gray-500 focus:ring-2 focus:ring-[#4EA674]"
                  : "bg-white border-gray-200 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-[#4EA674]"
              }
            `}
          />

        </div>

        {/* Status Filter */}

        <select
          value={statusFilter}
          onChange={(e) =>
            setStatusFilter(e.target.value)
          }
          className={`
            w-full
            md:w-52
            px-4
            py-3
            rounded-xl
            border
            outline-none
            transition
            ${
              DarkMode
                ? "bg-gray-800 border-gray-700 text-white"
                : "bg-white border-gray-200 text-gray-900"
            }
          `}
        >

          <option value="All">
            All Customers
          </option>

          <option value="Active">
            Active
          </option>

          <option value="Inactive">
            Inactive
          </option>

        </select>

      </div>

      {/* =========================
          Customers Table
      ========================== */}

      <div
        className={`
          overflow-x-auto
          rounded-2xl
          border
          shadow-sm
          transition
          ${
            DarkMode
              ? "bg-gray-800 border-gray-700"
              : "bg-white border-gray-200"
          }
        `}
      >

        <table className="w-full min-w-[950px]">

          {/* Table Header */}

          <thead
            className={
              DarkMode
                ? "bg-gray-700"
                : "bg-gray-50"
            }
          >

            <tr>

              <th
                className={`
                  text-left
                  px-6
                  py-4
                  text-sm
                  font-semibold
                  ${
                    DarkMode
                      ? "text-gray-200"
                      : "text-gray-600"
                  }
                `}
              >
                Customer
              </th>

              <th
                className={`
                  text-left
                  px-6
                  py-4
                  text-sm
                  font-semibold
                  ${
                    DarkMode
                      ? "text-gray-200"
                      : "text-gray-600"
                  }
                `}
              >
                Email
              </th>

              <th
                className={`
                  text-left
                  px-6
                  py-4
                  text-sm
                  font-semibold
                  ${
                    DarkMode
                      ? "text-gray-200"
                      : "text-gray-600"
                  }
                `}
              >
                Phone
              </th>

              <th
                className={`
                  text-left
                  px-6
                  py-4
                  text-sm
                  font-semibold
                  ${
                    DarkMode
                      ? "text-gray-200"
                      : "text-gray-600"
                  }
                `}
              >
                Orders
              </th>

              <th
                className={`
                  text-left
                  px-6
                  py-4
                  text-sm
                  font-semibold
                  ${
                    DarkMode
                      ? "text-gray-200"
                      : "text-gray-600"
                  }
                `}
              >
                Total Spent
              </th>

              <th
                className={`
                  text-left
                  px-6
                  py-4
                  text-sm
                  font-semibold
                  ${
                    DarkMode
                      ? "text-gray-200"
                      : "text-gray-600"
                  }
                `}
              >
                Status
              </th>

              <th
                className={`
                  text-left
                  px-6
                  py-4
                  text-sm
                  font-semibold
                  ${
                    DarkMode
                      ? "text-gray-200"
                      : "text-gray-600"
                  }
                `}
              >
                Action
              </th>

            </tr>

          </thead>

          {/* Table Body */}

          <tbody>

            {filteredCustomers.length > 0 ? (

              filteredCustomers.map(
                (customer) => (

                  <tr
                    key={customer.id}
                    className={`
                      border-t
                      transition
                      ${
                        DarkMode
                          ? "border-gray-700 hover:bg-gray-700/50"
                          : "border-gray-100 hover:bg-gray-50"
                      }
                    `}
                  >

                    {/* Customer */}

                    <td className="px-6 py-4">

                      <div className="flex items-center gap-3">

                        <div className="
                          w-10
                          h-10
                          rounded-full
                          bg-[#4EA674]
                          text-white
                          flex
                          items-center
                          justify-center
                          font-semibold
                        ">
                          {customer.name
                            .charAt(0)
                            .toUpperCase()}
                        </div>

                        <div>

                          <p
                            className={`
                              font-semibold
                              ${
                                DarkMode
                                  ? "text-white"
                                  : "text-gray-800"
                              }
                            `}
                          >
                            {customer.name}
                          </p>

                          <p
                            className={`
                              text-xs
                              mt-1
                              ${
                                DarkMode
                                  ? "text-gray-500"
                                  : "text-gray-400"
                              }
                            `}
                          >
                            ID: #{customer.id}
                          </p>

                        </div>

                      </div>

                    </td>

                    {/* Email */}

                    <td
                      className={`
                        px-6
                        py-4
                        text-sm
                        ${
                          DarkMode
                            ? "text-gray-300"
                            : "text-gray-600"
                        }
                      `}
                    >
                      {customer.email}
                    </td>

                    {/* Phone */}

                    <td
                      className={`
                        px-6
                        py-4
                        text-sm
                        ${
                          DarkMode
                            ? "text-gray-300"
                            : "text-gray-600"
                        }
                      `}
                    >
                      {customer.phone}
                    </td>

                    {/* Orders */}

                    <td
                      className={`
                        px-6
                        py-4
                        text-sm
                        font-semibold
                        ${
                          DarkMode
                            ? "text-white"
                            : "text-gray-800"
                        }
                      `}
                    >
                      {customer.orders}
                    </td>

                    {/* Total Spent */}

                    <td
                      className={`
                        px-6
                        py-4
                        text-sm
                        font-semibold
                        ${
                          DarkMode
                            ? "text-white"
                            : "text-gray-800"
                        }
                      `}
                    >
                      ${customer.totalSpent}
                    </td>

                    {/* Status */}

                    <td className="px-6 py-4">

                      <span
                        className={`
                          inline-flex
                          px-3
                          py-1
                          rounded-full
                          text-xs
                          font-medium
                          ${getStatusStyle(
                            customer.status
                          )}
                        `}
                      >
                        {customer.status}
                      </span>

                    </td>

                    {/* Action */}

                    <td className="px-6 py-4">

                      <button
                        onClick={() =>
                          alert(
                            `Customer: ${customer.name}`
                          )
                        }
                        className={`
                          flex
                          items-center
                          gap-2
                          px-3
                          py-2
                          rounded-lg
                          transition
                          text-sm
                          font-medium
                          ${
                            DarkMode
                              ? "text-green-400 hover:bg-green-900/30"
                              : "text-[#4EA674] hover:bg-green-50"
                          }
                        `}
                      >

                        <Eye size={17} />

                        View

                      </button>

                    </td>

                  </tr>

                )
              )

            ) : (

              <tr>

                <td
                  colSpan="7"
                  className={`
                    text-center
                    py-10
                    ${
                      DarkMode
                        ? "text-gray-400"
                        : "text-gray-500"
                    }
                  `}
                >
                  No customers found
                </td>

              </tr>

            )}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default Customers;