function RightReport ({DarkMode}){

const countries = [
  { name: "USA", flag: "🇺🇸", percent: "+28.5%" },
  { name: "Brazil", flag: "🇧🇷", percent: "-6.5%" },
  { name: "Australia", flag: "🇦🇺", percent: "+25.5%" },
];

    return(
        <div className=" w-full h-full" >

<div
  className={`shadow-sm rounded-xl p-5 border  transition-colors
    duration-500
    ease-in-out${
    DarkMode
      ? "bg-gray-800 border-gray-700 text-white"
      : "bg-white border-gray-200 text-gray-900"
  }`}
>


      {/* Live Users */}
      <div>
        <h2 className="text-sm font-semibold">
          Users in the 30 minutes
        </h2>

        <p className="text-3xl font-bold mt-2">
          21.5K
        </p>

        <p className="text-sm text-gray-400 mt-4">
          Users per minute
        </p>

        {/* نمودار میله‌ای اینجا */}
   <div className="flex items-end gap-1 h-12 mt-2">
  <div className="w-1 bg-green-400 h-5 rounded-t"></div>
  <div className="w-1 bg-green-400 h-8 rounded-t"></div>
  <div className="w-1 bg-green-400 h-4 rounded-t"></div>
  <div className="w-1 bg-green-400 h-10 rounded-t"></div>
  <div className="w-1 bg-green-400 h-6 rounded-t"></div>
  <div className="w-1 bg-green-400 h-9 rounded-t"></div>
  <div className="w-1 bg-green-400 h-7 rounded-t"></div>
  <div className="w-1 bg-green-400 h-11 rounded-t"></div>
  <div className="w-1 bg-green-400 h-5 rounded-t"></div>
  <div className="w-1 bg-green-400 h-8 rounded-t"></div>
</div>
      </div>

      {/* Sales by Country */}
      <div className="mt-2">
        <div className="flex justify-between">
          <h2 className="font-semibold">
            Sales by Country
          </h2>

          <span className="text-sm text-gray-500">
            Sales
          </span>
        </div>
      </div>
      <div className="mt-2 ">

  {/* Country 1 */}
  {/* <div className="flex items-center justify-between mb-4">

    <div className="flex items-center gap-2">
      <span className="text-xl">🇺🇸</span>

      <div>
        <p className="text-sm font-medium">USA</p>
        <p className="text-xs text-gray-400">USA</p>
      </div>
    </div>

    <div className="w-20 h-1 bg-gray-200 rounded">
      <div className="w-14 h-1 bg-indigo-500 rounded"></div>
    </div>

    <span className="text-xs text-green-500">
      +28.5%
    </span>

  </div> */}
  {/* country map */}
  {countries.map((country)=>(
    <div key={country.name} className="flex items-center justify-between mb-2 "> 
<div className=" flex items-center gap-2">
<span className="text-xl "> {country.flag}</span>
</div>
<p className="text-sm font-medium"> {country.name} </p>
<p className="text-es text-gray-400 "> sales</p>
<div className="w-20 h-1  bg-gray-200 rounded">
    <div className="w-14 h-1 bg-indigo-500 rounded"> </div>
</div>
<p className={
    country.percent.startsWith("+")
    ?"text-xs text-green-500"
    :"text-xs text-red-500"
}>
    {country.percent}
</p>
{/* <span className="text-xs text-gray-500"> {country.percent}</span> */}
    </div>
  ))}

</div>
<div className=" flex justify-center items-center mt-5">
 <button className="text-sm text-purple-500 w-10/12  border-2 rounded-2xl"> View Insight</button> 
</div>
   
    </div>

        </div>
    )
}
export default RightReport

{/* <span
  className={
    country.percent.startsWith("+")
      ? "text-xs text-green-500"
      : "text-xs text-red-500"
  }
>
  {country.percent}
</span> */}