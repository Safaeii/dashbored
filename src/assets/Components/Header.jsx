import { useState } from "react";

function Header({ isOpen,setIsOpen}) {


const [DarkMode,SetDarkMode]=useState(false)




  return (
    <header className="bg-white w-full h-20 flex justify-between items-center px-10
    ">

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

        <span className="text-[#023337] text-sm font-bold">
          Dashboard
        </span>

      </div>


      {/* ================= Right ================= */}

      <div className="flex items-center gap-5">

        {/* Search */}

        <div className="flex items-center justify-between bg-[#EAF8E7] px-3 w-60 h-10 rounded-3xl">

          <span className="text-[#546E7A] text-xs">
            Search data, users, or reports
          </span>

          <img
            src="/src/assets/images/Frame 4124.png"
            alt=""
            className="size-4"
          />

        </div>


        {/* Notification */}

        <img
          src="/src/assets/images/Bell outline.png"
          alt=""
          className="size-4"
        />
        {/* Theme */}

<button
  onClick={() => SetDarkMode(!DarkMode)}
  className="bg-[#EAF8E7] w-10 h-5 rounded-full flex items-center px-1"
>
  <span
    className={`size-4 rounded-full bg-white shadow-md transition-transform duration-300 ${
      DarkMode ? "translate-x-5" : "translate-x-0"
    }`}
  >
    <img
      src="/src/assets/images/iconamoon_mode-light.png"
      alt=""
      className="size-4"
    />
  </span>
</button>
        {/* Profile */}

        <img
          src="/src/assets/images/17 Picture.png"
          alt=""
          className="size-6"
        />

      </div>

    </header>
  );
}

export default Header;

