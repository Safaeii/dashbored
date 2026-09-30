
import {
  ShoppingCart,
  Clock3,
  CheckCircle2,
  Truck,
} from "lucide-react";

const recentOrders = [
  {
    id: "#ORD-1024",
    customer: "Sophia Davis",
    product: "Wireless Headphones",
    amount: "$240",
    status: "Completed",
  },
  {
    id: "#ORD-1023",
    customer: "Michael Brown",
    product: "Smart Backpack",
    amount: "$170",
    status: "Pending",
  },
  {
    id: "#ORD-1022",
    customer: "Emma Wilson",
    product: "Coffee Maker",
    amount: "$150",
    status: "Processing",
  },
  {
    id: "#ORD-1021",
    customer: "John Smith",
    product: "Running Shoes",
    amount: "$190",
    status: "Completed",
  },
  {
    id: "#ORD-1020",
    customer: "Olivia Taylor",
    product: "Desk Lamp",
    amount: "$90",
    status: "Processing",
  },
];

function RecentOrders({ DarkMode }) {
  const getStatus = (status) => {
    if (status === "Completed") {
      return {
        icon: CheckCircle2,
        className: DarkMode
          ? "bg-green-900/30 text-green-400"
          : "bg-green-100 text-green-700",
      };
    }

    if (status === "Pending") {
      return {
        icon: Clock3,
        className: DarkMode
          ? "bg-yellow-900/30 text-yellow-400"
          : "bg-yellow-100 text-yellow-700",
      };
    }

    return {
      icon: Truck,
      className: DarkMode
        ? "bg-blue-900/30 text-blue-400"
        : "bg-blue-100 text-blue-700",
    };
  };

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
            Recent Orders
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
            Latest customer orders
          </p>
        </div>

        <ShoppingCart
          size={21}
          className="text-[#4EA674]"
        />
      </div>

      {/* Orders */}

      <div className="space-y-4">
        {recentOrders.map((order) => {
          const status = getStatus(order.status);

          const StatusIcon = status.icon;

          return (
            <div
              key={order.id}
              className={`
                flex
                items-center
                gap-4
                p-4
                rounded-xl
                transition
                ${
                  DarkMode
                    ? "bg-gray-700/50 hover:bg-gray-700"
                    : "bg-gray-50 hover:bg-gray-100"
                }
              `}
            >
              {/* Order Icon */}

              <div
                className={`
                  w-10
                  h-10
                  rounded-xl
                  flex
                  items-center
                  justify-center
                  flex-shrink-0
                  ${
                    DarkMode
                      ? "bg-gray-700 text-[#4EA674]"
                      : "bg-green-50 text-[#4EA674]"
                  }
                `}
              >
                <ShoppingCart size={18} />
              </div>

              {/* Order Info */}

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
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
                    {order.id}
                  </p>
                </div>

                <p
                  className={`
                    text-xs
                    mt-1
                    truncate
                    ${
                      DarkMode
                        ? "text-gray-400"
                        : "text-gray-500"
                    }
                  `}
                >
                  {order.customer}
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
                  {order.product}
                </p>
              </div>

              {/* Amount */}

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
                  {order.amount}
                </p>

                <div
                  className={`
                    inline-flex
                    items-center
                    gap-1
                    px-2
                    py-1
                    rounded-full
                    text-[10px]
                    font-medium
                    mt-2
                    ${status.className}
                  `}
                >
                  <StatusIcon size={12} />
                  {order.status}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* View All */}

      <button
        className="
          w-full
          mt-5
          py-3
          rounded-xl
          text-sm
          font-medium
          text-[#4EA674]
          border
          border-[#4EA674]/20
          hover:bg-[#4EA674]/10
          transition
        "
      >
        View All Orders
      </button>
    </div>
  );
}

export default RecentOrders;

