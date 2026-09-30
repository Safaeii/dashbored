
import {
  Headphones,
  Backpack,
  Coffee,
  Footprints,
  Lamp,
} from "lucide-react";

const topProducts = [
  {
    id: 1,
    name: "Wireless Headphones",
    category: "Electronics",
    sales: 1240,
    percentage: 92,
    icon: Headphones,
  },
  {
    id: 2,
    name: "Smart Backpack",
    category: "Accessories",
    sales: 980,
    percentage: 78,
    icon: Backpack,
  },
  {
    id: 3,
    name: "Coffee Maker",
    category: "Home",
    sales: 760,
    percentage: 64,
    icon: Coffee,
  },
  {
    id: 4,
    name: "Running Shoes",
    category: "Fashion",
    sales: 640,
    percentage: 52,
    icon: Footprints,
  },
  {
    id: 5,
    name: "Desk Lamp",
    category: "Home",
    sales: 520,
    percentage: 42,
    icon: Lamp,
  },
];

function TopProducts({ DarkMode }) {
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
            Top Products
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
            Best selling products
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

      {/* Products */}
      <div className="space-y-5">
        {topProducts.map((product, index) => {
          const Icon = product.icon;

          return (
            <div key={product.id}>
              <div className="flex items-center gap-4">
                {/* Rank */}
                <div
                  className={`
                    w-7
                    h-7
                    rounded-full
                    flex
                    items-center
                    justify-center
                    text-xs
                    font-bold
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
                  {index + 1}
                </div>

                {/* Icon */}
                <div
                  className={`
                    w-11
                    h-11
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
                  <Icon size={21} />
                </div>

                {/* Product Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-3">
                    <div className="min-w-0">
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

                    <div className="text-right flex-shrink-0">
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
                        {product.sales.toLocaleString()}
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
                        sold
                      </p>
                    </div>
                  </div>

                  {/* Progress */}
                  <div
                    className={`
                      w-full
                      h-2
                      rounded-full
                      mt-3
                      ${
                        DarkMode
                          ? "bg-gray-700"
                          : "bg-gray-100"
                      }
                    `}
                  >
                    <div
                      className="
                        h-2
                        rounded-full
                        bg-[#4EA674]
                        transition-all
                        duration-500
                      "
                      style={{
                        width: `${product.percentage}%`,
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TopProducts;
