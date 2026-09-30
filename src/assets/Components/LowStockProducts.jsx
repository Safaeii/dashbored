
import {
  Package,
  AlertTriangle,
  ArrowRight,
} from "lucide-react";

const lowStockProducts = [
  {
    id: 1,
    name: "Desk Lamp",
    category: "Home",
    stock: 4,
  },
  {
    id: 2,
    name: "Coffee Maker",
    category: "Home",
    stock: 6,
  },
  {
    id: 3,
    name: "Smart Backpack",
    category: "Accessories",
    stock: 8,
  },
  {
    id: 4,
    name: "Running Shoes",
    category: "Fashion",
    stock: 9,
  },
];

function LowStockProducts({ DarkMode }) {
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
            Low Stock Products
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
            Products that need restocking
          </p>
        </div>

        <div
          className={`
            w-10
            h-10
            rounded-xl
            flex
            items-center
            justify-center
            ${
              DarkMode
                ? "bg-red-900/30 text-red-400"
                : "bg-red-50 text-red-600"
            }
          `}
        >
          <AlertTriangle size={20} />
        </div>
      </div>

      {/* Products */}

      <div className="space-y-4">
        {lowStockProducts.map((product) => (
          <div
            key={product.id}
            className={`
              flex
              items-center
              gap-4
              p-4
              rounded-xl
              ${
                DarkMode
                  ? "bg-gray-700/50"
                  : "bg-gray-50"
              }
            `}
          >
            {/* Icon */}

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
              <Package size={19} />
            </div>

            {/* Product Info */}

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
                {product.name}
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
                {product.category}
              </p>
            </div>

            {/* Stock */}

            <div className="text-right">
              <p
                className={`
                  text-sm
                  font-bold
                  ${
                    product.stock <= 5
                      ? "text-red-500"
                      : "text-yellow-500"
                  }
                `}
              >
                {product.stock}
              </p>

              <p
                className={`
                  text-xs
                  ${
                    DarkMode
                      ? "text-gray-500"
                      : "text-gray-400"
                  }
                `}
              >
                left
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Button */}

      <button
        className="
          w-full
          mt-5
          flex
          items-center
          justify-center
          gap-2
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
        Manage Inventory
        <ArrowRight size={16} />
      </button>
    </div>
  );
}

export default LowStockProducts;

