
function Sidebar({ isOpen, setIsOpen }) {

  // ===================== Main Menu =====================

  const menuItems = [
    {
      title: "Dashboard",
      icon: "house",
    },
    {
      title: "Order Management",
      icon: "/src/assets/images/Cart.png",
    },
    {
      title: "Customers",
      icon: "/src/assets/images/users.png",
    },
    {
      title: "Coupon Code",
      icon: "/src/assets/images/ticket (1).png",
    },
    {
      title: "Categories",
      icon: "/src/assets/images/circle-square.png",
    },
    {
      title: "Transaction",
      icon: "/src/assets/images/famicons_card-outline.png",
    },
    {
      title: "Brand",
      icon: "/src/assets/images/star.png",
    },
  ];


  // ===================== Product =====================

  const productItems = [
    {
      title: "Add Products",
      icon: "/src/assets/images/Bell outline.png",
    },
    {
      title: "Product Media",
      icon: "/src/assets/images/fluent-mdl2_product-list.png",
    },
    {
      title: "Product List",
      icon: "/src/assets/images/ticket (1).png",
    },
    {
      title: "Product Reviews",
      icon: "/src/assets/images/material-symbols_reviews-outline.png",
    },
  ];


  // ===================== Admin =====================

  const adminItems = [
    {
      title: "Admin role",
      icon: "/src/assets/images/user-profile-circle.png",
    },
    {
      title: "Control Authority",
      icon: "/src/assets/images/settings.png",
    },
  ];


  return (
    <>

      {/* ================= Overlay ================= */}

{/* ${isOpen ? "translate-x-0" : "-translate-x-full"} */}
      {/* ================= Sidebar ================= */}

      <aside
        className={`
    fixed
    top-0
    left-0
    z-50
    w-64
    h-screen
    bg-white
    shadow-lg
    px-3
    py-8
    overflow-y-auto
    transition-transform
    duration-300
    ease-in-out
    ${isOpen ? "translate-x-0" : "-translate-x-full"}
  `}
>


        {/* ================= Logo ================= */}

        <div className="flex justify-between items-center mb-6">

          <img
            src="/src/assets/images/Frame 4121.png"
            alt="logo"
            className="w-20 h-5"
          />


          {/* Close Button */}

          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="text-[#546E7A] cursor-pointer"
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

        </div>


        {/* ================= Main Menu ================= */}

        <h2 className="text-sm text-[#546E7A] mb-3">
          Main menu
        </h2>


        <div className="flex flex-col gap-2">

          {menuItems.map((item, index) => (

            <div
              key={item.title}
              className={`
                flex
                items-center
                gap-2
                w-full
                px-2
                py-2
                rounded-sm
                cursor-pointer
                ${index === 0 ? "bg-[#4EA674]" : ""}
              `}
            >

              {/* Dashboard Icon */}

              {item.icon === "house" ? (

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={
                    index === 0
                      ? "text-white"
                      : "text-[#546E7A]"
                  }
                >

                  <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />

                  <path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />

                </svg>

              ) : (

                <img
                  src={item.icon}
                  alt={item.title}
                  className="size-5"
                />

              )}


              <p
                className={
                  index === 0
                    ? "text-white text-sm"
                    : "text-[#546E7A] text-sm"
                }
              >
                {item.title}
              </p>

            </div>

          ))}

        </div>


        {/* ================= Product ================= */}

        <h2 className="text-sm text-[#546E7A] mt-6 mb-3">
          Product
        </h2>


        <div className="flex flex-col gap-3">

          {productItems.map((item) => (

            <div
              key={item.title}
              className="flex items-center gap-2 cursor-pointer"
            >

              <img
                src={item.icon}
                alt={item.title}
                className="size-5"
              />

              <p className="text-[#546E7A] text-sm">
                {item.title}
              </p>

            </div>

          ))}

        </div>


        {/* ================= Admin ================= */}

        <h2 className="text-sm text-[#546E7A] mt-6 mb-3">
          Admin
        </h2>


        <div className="flex flex-col gap-3">

          {adminItems.map((item) => (

            <div
              key={item.title}
              className="flex items-center gap-2 cursor-pointer"
            >

              <img
                src={item.icon}
                alt={item.title}
                className="size-5"
              />

              <p className="text-[#546E7A] text-sm">
                {item.title}
              </p>

            </div>

          ))}

        </div>


        {/* ================= Account ================= */}

        <div className="flex justify-center gap-2 items-center mt-6">

          <img
            src="/src/assets/images/17 Picture.png"
            alt=""
            className="size-5"
          />

          <div className="flex flex-col items-start">

            <h2 className="text-sm font-bold">
              Dealport
            </h2>

            <p className="text-[#546E7A] text-xs">
              Mark@thedesigner...
            </p>

          </div>

          <img
            src="/src/assets/images/ic_round-logout.png"
            alt=""
            className="size-5"
          />

        </div>


        {/* ================= Your Shop ================= */}

        <div className="flex items-center justify-between w-full h-10 px-2 rounded-xl shadow mt-4">

          <div className="flex items-center gap-2">

            <img
              src="/src/assets/images/Frame.png"
              alt=""
              className="size-5"
            />

            <p className="text-xs text-[#546E7A]">
              Your Shop
            </p>

          </div>

          <img
            src="/src/assets/images/link-external.png"
            alt=""
            className="size-5"
          />

        </div>

      </aside>

    </>
  );
}

export default Sidebar;
