import React, { useEffect, useState } from "react";

function Header() {
  const [date, setDate] = useState(new Date());

  setInterval(() => {
    setDate(new Date())
  }, 1 * 1000)

  return (
    <div className="m-5">
      <div className="flex justify-between mb-2">
        <h1 className="text-3xl font-bold text-white">MJP Dashboard</h1>
        <h2 className="text-2xl font-semibold text-white">
          {date.toLocaleTimeString()}
        </h2>
      </div>
      <hr className="border-slate-600"/>
    </div>
  );
}

export default Header;
