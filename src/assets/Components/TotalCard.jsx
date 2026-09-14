function TotalCard ( {title ,period, value , label ,percent , previous }  ){
    return(
        <div>


  <div className="bg-white rounded-xl p-5 shadow-sm">

      <h3 className="text-lg font-semibold">
{title}
      </h3>

      <p className="text-sm text-gray-400 mt-2">
  {period}
      </p>

      <div className="flex items-center gap-3 mt-5">
        <span className="text-2xl font-bold">
{value}
        </span>

        <span className="text-green-500 text-sm">
    {label}{percent}
        </span>
      </div>

      <p className="text-xs text-gray-400 mt-2">
        Previous 7 {previous}
      </p>

      <div className="flex justify-end mt-5">
        <button className="border border-indigo-200 text-indigo-500 rounded-full px-5 py-2">
          Details
        </button>
      </div>

    </div>

        </div>
    )
}
export default TotalCard




// function TotalCard({ title, period, value, label, percent, previous }) {
//   return (
//     <div className="bg-white rounded-xl p-5 shadow-sm">

//       <h3 className="text-lg font-semibold">
//         {title}
//       </h3>

//       <p className="text-sm text-gray-400 mt-2">
//         {period}
//       </p>

//       <div className="flex items-center gap-3 mt-5">
//         <span className="text-2xl font-bold">
//           {value}
//         </span>

//         <span className="text-green-500 text-sm">
//           {label} {percent}
//         </span>
//       </div>

//       <p className="text-xs text-gray-400 mt-2">
//         Previous 7 days {previous}
//       </p>

//       <div className="flex justify-end mt-5">
//         <button className="border border-indigo-200 text-indigo-500 rounded-full px-5 py-2">
//           Details
//         </button>
//       </div>

//     </div>
//   );
// }

// export default TotalCard;


