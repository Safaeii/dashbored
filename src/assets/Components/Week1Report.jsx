

function Week1Report() {
  const reports = [
    { dey: "Mon", value: 40 },
    { dey: "Tue", value: 65 },
    { dey: "Wed", value: 50 },
    { dey: "Thu", value: 80 },
    { dey: "Fri", value: 60 },
    { dey: "Sat", value: 90 },
    { dey: "Sun", value: 70 },
  ];

  const levels = [0, 20, 40, 60, 80, 100];

  return (
    <div className="w-full">
      <div className="bg-white rounded-xl p-5 w-full">

        {/* Header */}
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold">
            Report for this week
          </h2>

          <button className="text-sm text-gray-500">
            This week
          </button>
        </div>

        {/* Chart */}
        <div className="mt-6 flex h-52">

          {/* Numbers */}
          <div className="flex flex-col justify-between text-xs text-gray-400 pr-3">
            {levels
              .slice()
              .reverse()
              .map((level) => (
                <span key={level}>
                  {level}
                </span>
              ))}
          </div>

          {/* Chart Area */}
          <div className="flex-1 relative">

            {/* Background Lines */}
            <div className="absolute inset-0 flex flex-col justify-between">
              {levels.map((level) => (
                <div
                  key={level}
                  className="w-full border-t border-gray-100"
                ></div>
              ))}
            </div>

            {/* Bars */}
            <div className="relative h-full flex items-end justify-between px-2">

              {reports.map((report) => (
                <div
                  key={report.dey}
                  className="flex h-full flex-col items-center justify-end"
                >

                  {/* Value */}
                  <span className="text-xs text-gray-500 mb-1">
                    {report.value}
                  </span>

                  {/* Bar */}
                  <div
                    className="w-8 bg-[#4EA674] rounded-t-md"
                    style={{
                      height: `${report.value * 2}px`,
                    }}
                  ></div>

                  {/* Day */}
                  <p className="text-xs text-gray-500 mt-2">
                    {report.dey}
                  </p>

                </div>
              ))}

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

export default Week1Report;
