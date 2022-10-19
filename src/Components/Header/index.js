import React, { useState } from "react";

function Header() {
  const [date, setDate] =useState(new Date())

  setInterval(() => {
    setDate(new Date())
  }, 1 * 1000)

  
  return (
    <div className="flex justify-between m-5">
      <h1 className="text-3xl font-bold text-white">MJP Dashboard</h1>
      <h2 className="text-2xl font-semibold text-white">{date.toLocaleTimeString()}</h2>
    </div>
  );
}

export default Header;
