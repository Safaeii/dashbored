import {
Sun
} from "lucide-react";
function Them({ DarkMode, SetDarkMode }) {
  console.log("Them:", DarkMode);

  return (
    <div>
      <p>{DarkMode ? "" : ""}</p>

      <button
        onClick={() => SetDarkMode(prev => !prev)}
        className="bg-gray-50 w-10 h-5 rounded-full flex items-center px-1"
      >
        <span
          className={`size-6 rounded-full bg-gray-500 shadow-md transition-transform duration-300 ${
            DarkMode ? "translate-x-5" : "translate-x-0"
          }`}
        >
    <Sun />
        </span>
      </button>
    </div>
  );
}

export default Them;
