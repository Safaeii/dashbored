
import {
  UserRound,
  Crown,
  ShoppingBag,
} from "lucide-react";

const topCustomers = [
  {
    id: 1,
    name: "Sophia Davis",
    email: "sophia@example.com",
    orders: 42,
    spent: "$4,850",
  },
  {
    id: 2,
    name: "Michael Brown",
    email: "michael@example.com",
    orders: 36,
    spent: "$4,120",
  },
  {
    id: 3,
    name: "Emma Wilson",
    email: "emma@example.com",
    orders: 31,
    spent: "$3,680",
  },
  {
    id: 4,
    name: "John Smith",
    email: "john@example.com",
    orders: 27,
    spent: "$3,240",
  },
  {
    id: 5,
    name: "Olivia Taylor",
    email: "olivia@example.com",
    orders: 24,
    spent: "$2,950",
  },
];

function TopCustomers({ DarkMode }) {
  return (
    <div
      className={`
        rounded-2xl
        border
        p-6
        shadow-sm
        ${
          DarkMode
            ? "bg-gray-800 border-gray-700"
            : "bg-white border-gray-200"
        }
      `}
    >
      {/* Header */}

      <div className="flex items-center justify-between mb-6">
        <div>
          <h2
            className={`
              text-lg
              font-semibold
              ${
                DarkMode
                  ? "text-white"
                  : "text-gray-900"
              }
            `}
          >
            Top Customers
          </h2>

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
            Most valuable customers
          </p>
        </div>

        <button
          className="
            text-sm
            font-medium
            text-[#4EA674]
            hover:underline
          "
        >
          View All
        </button>
      </div>

      {/* Customers */}

      <div className="space-y-4">
        {topCustomers.map((customer, index) => {
          return (
            <div
              key={customer.id}
              className={`
                flex
                items-center
                gap-4
                p-3
                rounded-xl
                transition
                ${
                  DarkMode
                    ? "hover:bg-gray-700"
                    : "hover:bg-gray-50"
                }
              `}
            >
              {/* Avatar */}

              <div
                className={`
                  w-11
                  h-11
                  rounded-full
                  flex
                  items-center
                  justify-center
                  flex-shrink-0
                  ${
                    index === 0
                      ? "bg-yellow-100 text-yellow-700"
                      : DarkMode
                      ? "bg-gray-700 text-gray-300"
                      : "bg-gray-100 text-gray-500"
                  }
                `}
              >
                {index === 0 ? (
                  <Crown size={20} />
                ) : (
                  <UserRound size={20} />
                )}
              </div>

              {/* Customer Info */}

              <div className="flex-1 min-w-0">
                <p
                  className={`
                    text-sm
                    font-semibold
                    truncate
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
                    truncate
                    ${
                      DarkMode
                        ? "text-gray-500"
                        : "text-gray-400"
                    }
                  `}
                >
                  {customer.email}
                </p>
              </div>

              {/* Orders */}

              <div className="hidden sm:flex items-center gap-2">
                <ShoppingBag
                  size={16}
                  className={
                    DarkMode
                      ? "text-gray-500"
                      : "text-gray-400"
                  }
                />

                <span
                  className={`
                    text-xs
                    ${
                      DarkMode
                        ? "text-gray-300"
                        : "text-gray-600"
                    }
                  `}
                >
                  {customer.orders} orders
                </span>
              </div>

              {/* Spent */}

              <div className="text-right">
                <p
                  className={`
                    text-sm
                    font-semibold
                    ${
                      DarkMode
                        ? "text-white"
                        : "text-gray-800"
                    }
                  `}
                >
                  {customer.spent}
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
                  Total spent
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TopCustomers;

