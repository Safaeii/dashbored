import { Settings as SettingsIcon } from "lucide-react";

function Settings({ DarkMode }) {
  return (
    <div>
      <div
        className={`rounded-2xl border p-6 ${
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
            <SettingsIcon size={22} />
          </div>

          <div>
            <h1
              className={`text-xl font-bold ${
                DarkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Settings
            </h1>

            <p
              className={`text-sm mt-1 ${
                DarkMode ? "text-gray-400" : "text-gray-500"
              }`}
            >
              Manage your dashboard settings
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;