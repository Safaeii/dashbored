import { useState } from "react";

import {
  Search,
  Eye,
} from "lucide-react";

const initialOrders = [
  {
    id: "#ORD-1001",
    customer: "John Smith",
    product: "Wireless Headphones",
    date: "Sep 28, 2026",
    amount: 120,
    status: "Completed",
  },
  {
    id: "#ORD-1002",
    customer: "Emily Johnson",
    product: "Smart Backpack",
    date: "Sep 27, 2026",
    amount: 85,
    status: "Pending",
  },
  {
    id: "#ORD-1003",
    customer: "Michael Brown",
    product: "Coffee Maker",
    date: "Sep 26, 2026",
    amount: 150,
    status: "Processing",
  },
  {
    id: "#ORD-1004",
    customer: "Sarah Wilson",
    product: "Running Shoes",
    date: "Sep 25, 2026",
    amount: 95,
    status: "Completed",
  },
  {
    id: "#ORD-1005",
    customer: "David Miller",
    product: "Desk Lamp",
    date: "Sep 24, 2026",
    amount: 45,
    status: "Canceled",
  },
  {
    id: "#ORD-1006",
    customer: "Olivia Davis",
    product: "Wireless Headphones",
    date: "Sep 23, 2026",
    amount: 120,
    status: "Processing",
  },
  {
    id: "#ORD-1007",
    customer: "James Anderson",
    product: "Smart Backpack",
    date: "Sep 22, 2026",
    amount: 85,
    status: "Completed",
  },
  {
    id: "#ORD-1008",
    customer: "Sophia Taylor",
    product: "Coffee Maker",
    date: "Sep 21, 2026",
    amount: 150,
    status: "Pending",
  },
];

function Orders({ DarkMode }) {
  const [orders] = useState(initialOrders);

  const [search, setSearch] = useState("");

  const [statusFilter, setStatusFilter] =
    useState("All");

  // Search + Filter
  const filteredOrders = orders.filter((order) => {
    const searchValue =
      search.toLowerCase();

    const matchesSearch =
      order.id
        .toLowerCase()
        .includes(searchValue) ||
      order.customer
        .toLowerCase()
        .includes(searchValue) ||
      order.product
        .toLowerCase()
        .includes(searchValue);

    const matchesStatus =
      statusFilter === "All" ||
      order.status === statusFilter;

    return (
      matchesSearch &&
      matchesStatus
    );
  });

  // Status Style
  const getStatusStyle = (status) => {
    if (status === "Completed") {
      return DarkMode
        ? "bg-green-900/40 text-green-400"
        : "bg-green-100 text-green-700";
    }

    if (status === "Processing") {
      return DarkMode
        ? "bg-blue-900/40 text-blue-400"
        : "bg-blue-100 text-blue-700";
    }

    if (status === "Pending") {
      return DarkMode
        ? "bg-yellow-900/40 text-yellow-400"
        : "bg-yellow-100 text-yellow-700";
    }

    if (status === "Canceled") {
      return DarkMode
        ? "bg-red-900/40 text-red-400"
        : "bg-red-100 text-red-700";
    }

    return DarkMode
      ? "bg-gray-700 text-gray-300"
      : "bg-gray-100 text-gray-700";
  };

  return (
    <div>

      {/* Page Header */}

      <div className="mb-6">

        <h1
          className={`
            text-2xl
            font-bold
            ${
              DarkMode
                ? "text-white"
                : "text-gray-900"
            }
          `}
        >
          Orders
        </h1>

        <p
          className={`
            text-sm
            mt-1
            ${
              DarkMode
                ? "text-gray-400"
                : "text-gray-500"
            }
          `}
        >
          Manage and track your orders
        </p>

      </div>

      {/* Search + Filter */}

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
            placeholder="Search by order ID, customer or product..."
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
              ${
                DarkMode
                  ? "bg-gray-800 border-gray-700 text-white placeholder-gray-500"
                  : "bg-white border-gray-200 text-gray-900 placeholder-gray-400"
              }
              focus:ring-2
              focus:ring-[#4EA674]
            `}
          />

        </div>

        {/* Filter */}

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
            ${
              DarkMode
                ? "bg-gray-800 border-gray-700 text-white"
                : "bg-white border-gray-200 text-gray-900"
            }
          `}
        >
          <option value="All">
            All Status
          </option>

          <option value="Completed">
            Completed
          </option>

          <option value="Processing">
            Processing
          </option>

          <option value="Pending">
            Pending
          </option>

          <option value="Canceled">
            Canceled
          </option>
        </select>

      </div>

      {/* Table */}

      <div
        className={`
          overflow-x-auto
          rounded-2xl
          border
          shadow-sm
          ${
            DarkMode
              ? "bg-gray-800 border-gray-700"
              : "bg-white border-gray-200"
          }
        `}
      >

        <table className="w-full min-w-[900px]">

          {/* Header */}

          <thead
            className={
              DarkMode
                ? "bg-gray-700"
                : "bg-gray-50"
            }
          >

            <tr>

              {[
                "Order ID",
                "Customer",
                "Product",
                "Date",
                "Amount",
                "Status",
                "Action",
              ].map((title) => (
                <th
                  key={title}
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
                  {title}
                </th>
              ))}

            </tr>

          </thead>

          {/* Body */}

          <tbody>

            {filteredOrders.length > 0 ? (

              filteredOrders.map((order) => (

                <tr
                  key={order.id}
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
                    {order.id}
                  </td>

                  <td
                    className={`
                      px-6
                      py-4
                      text-sm
                      ${
                        DarkMode
                          ? "text-gray-300"
                          : "text-gray-700"
                      }
                    `}
                  >
                    {order.customer}
                  </td>

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
                    {order.product}
                  </td>

                  <td
                    className={`
                      px-6
                      py-4
                      text-sm
                      ${
                        DarkMode
                          ? "text-gray-400"
                          : "text-gray-500"
                      }
                    `}
                  >
                    {order.date}
                  </td>

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
                    ${order.amount}
                  </td>

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
                          order.status
                        )}
                      `}
                    >
                      {order.status}
                    </span>

                  </td>

                  <td className="px-6 py-4">

                    <button
                      onClick={() =>
                        alert(
                          `Order ${order.id}`
                        )
                      }
                      className={`
                        flex
                        items-center
                        gap-2
                        px-3
                        py-2
                        rounded-lg
                        text-sm
                        font-medium
                        transition
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

              ))

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
                  No orders found
                </td>

              </tr>

            )}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default Orders;