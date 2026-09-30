import {
  BarChart3,
  TrendingUp,
  ShoppingCart,
  DollarSign,
} from "lucide-react";

function SalesAnalytics({ DarkMode }) {
  const stats = [
    {
      title: "Total Revenue",
      value: "$48,250",
      change: "+12.5%",
      icon: DollarSign,
    },
    {
      title: "Total Sales",
      value: "2,840",
      change: "+8.4%",
      icon: ShoppingCart,
    },
    {
      title: "Growth",
      value: "18.2%",
      change: "+4.2%",
      icon: TrendingUp,
    },
  ];

  return (
    <div>
      {/* Page Header */}
      <div className="mb-6">
        <h1
          className={`text-2xl font-bold ${
            DarkMode ? "text-white" : "text-gray-900"
          }`}
        >
          Sales Analytics
        </h1>

        <p
          className={`mt-1 text-sm ${
            DarkMode ? "text-gray-400" : "text-gray-500"
          }`}
        >
          Overview of your sales performance
        </p>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {stats.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className={`rounded-2xl border p-6 shadow-sm ${
                DarkMode
                  ? "bg-gray-800 border-gray-700"
                  : "bg-white border-gray-200"
              }`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <p
                    className={`text-sm ${
                      DarkMode
                        ? "text-gray-400"
                        : "text-gray-500"
                    }`}
                  >
                    {item.title}
                  </p>

                  <h2
                    className={`text-2xl font-bold mt-2 ${
                      DarkMode
                        ? "text-white"
                        : "text-gray-900"
                    }`}
                  >
                    {item.value}
                  </h2>

                  <p className="text-sm text-[#4EA674] mt-2">
                    {item.change}
                  </p>
                </div>

                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                    DarkMode
                      ? "bg-gray-700 text-[#4EA674]"
                      : "bg-green-50 text-[#4EA674]"
                  }`}
                >
                  <Icon size={22} />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Sales Overview */}
      <div
        className={`mt-5 rounded-2xl border p-6 ${
          DarkMode
            ? "bg-gray-800 border-gray-700"
            : "bg-white border-gray-200"
        }`}
      >
        <div className="flex items-center gap-3">
          <div
            className={`w-11 h-11 rounded-xl flex items-center justify-center ${
              DarkMode
                ? "bg-gray-700 text-[#4EA674]"
                : "bg-green-50 text-[#4EA674]"
            }`}
          >
            <BarChart3 size={22} />
          </div>

          <div>
            <h2
              className={`text-lg font-semibold ${
                DarkMode
                  ? "text-white"
                  : "text-gray-900"
              }`}
            >
              Sales Overview
            </h2>

            <p
              className={`text-sm mt-1 ${
                DarkMode
                  ? "text-gray-400"
                  : "text-gray-500"
              }`}
            >
              Sales performance over the last 7 days
            </p>
          </div>
        </div>

        {/* Chart Area */}
        <div
          className={`mt-6 h-80 rounded-xl flex items-center justify-center ${
            DarkMode
              ? "bg-gray-700/50"
              : "bg-gray-50"
          }`}
        >
          <p
            className={`text-sm ${
              DarkMode
                ? "text-gray-500"
                : "text-gray-400"
            }`}
          >
            Chart will be added here
          </p>
        </div>
      </div>
    </div>
  );
}

export default SalesAnalytics;