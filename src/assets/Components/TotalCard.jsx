// function TotalCard ( {title ,period, value , label ,percent , previous , DarkMode}  ){
//     return(
//         <div>


//  <div
//   className={`shadow-sm rounded-xl p-5 border  transition-colors
//     duration-500
//     ease-in-out${
//     DarkMode
//       ? "bg-gray-800 border-gray-700 text-white"
//       : "bg-white border-gray-200 text-gray-900"
//   }`}>

//       <h3 className="text-lg font-semibold">
// {title}
//       </h3>

//       <p className="text-sm text-gray-400 mt-2">
//   {period}
//       </p>

//       <div className="flex items-center  gap-3 mt-5">
//         <span className="text-2xl font-bold">
// {value}
//         </span>

//         <span className="text-green-500 text-sm">
//     {label}{percent}
//         </span>
//       </div>

//       <p className="text-xs text-gray-400 mt-2">
//         Previous 7 {previous}
//       </p>

//       <div className="flex justify-end mt-5">
//         <button className="border border-indigo-200 text-indigo-500 rounded-full px-5 py-2">
//           Details
//         </button>
//       </div>

//     </div>

//         </div>
//     )
// }
// export default TotalCard


function TotalCard({
  title,
  period,
  value,
  label,
  percent,
  previous,
  DarkMode,
}) {
  return (
    <div
      className={`
        rounded-xl
        p-5
        border
        shadow-sm
        transition-all
        duration-500
        ${
          DarkMode
            ? "bg-gray-800 border-gray-700 text-white"
            : "bg-white border-gray-200 text-gray-900"
        }
      `}
    >

      <h3 className="text-lg font-semibold ">
        {title}
      </h3>

      <p className="text-sm text-gray-400 mt-2">
        {period}
      </p>

      <div className="flex items-center gap-3 mt-5">

        <span className="text-2xl font-bold ">
          {value}
        </span>

        <span className="text-green-500 text-sm">
          {label} {percent}
        </span>

      </div>

      <p className="text-xs text-gray-400 mt-2">
        Previous 7 {previous}
      </p>

      <div className="flex justify-end mt-5">

        <button
          className={`
            border
            rounded-full
            px-5
            py-2
            transition-all
            duration-500

            ${
              DarkMode
                ? "border-indigo-400 text-indigo-400"
                : "border-indigo-200 text-indigo-500"
            }
          `}
        >
          Details
        </button>

      </div>

    </div>
  );
}

export default TotalCard;



