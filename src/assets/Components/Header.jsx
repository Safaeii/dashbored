import Them from "./Them";
import {
Bell ,
  Search,

  UserRound 
} from "lucide-react";
function Header({ DarkMode, SetDarkMode, isOpen, setIsOpen }) {
 







  return (
    <header className={`w-full h-20 flex justify-between items-center px-10 transition-colors duration-300 ${
    DarkMode
      ? "bg-gray-800 text-white border border-white/20"
      : "bg-white text-gray-900"
  }`}
    >

      {/* ================= Left ================= */}

      <div className="flex items-center gap-5">

        {/* Hamburger */}

      <button
  type="button"
  onClick={() => setIsOpen(prev => !prev)}
  className={`text-[#546E7A] cursor-pointer ${isOpen ? "hidden" : ""}`}
>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M3 5h1" />
            <path d="M3 12h1" />
            <path d="M3 19h1" />
            <path d="M8 5h1" />
            <path d="M8 12h1" />
            <path d="M8 19h1" />
            <path d="M13 5h8" />
            <path d="M13 12h8" />
            <path d="M13 19h8" />
          </svg>

        </button>

        <span className="text-[#1e737a] text-sm font-bold">
          Dashboard
        </span>

      </div>


      {/* ================= Right ================= */}

      <div className="flex items-center gap-5">

        {/* Search */}

        <div className="flex items-center justify-between shadow-sm  px-3 w-60 h-10 rounded-3xl">

          <span className="text-[#546E7A] text-xs">
            Search data, users, or reports
          </span>

       <Search />

        </div>


        {/* Notification */}

   <Bell />
        {/* ====them==== */}
<Them
  DarkMode={DarkMode}
  SetDarkMode={SetDarkMode}
/>

        {/* Profile */}

<UserRound />

      </div>

    </header>
  );
}

export default Header;

