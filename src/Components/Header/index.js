import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNoteSticky } from "@fortawesome/free-regular-svg-icons";
import Tooltip from "../Tooltip";
function Header() {
  const [date, setDate] = useState(new Date());

  setInterval(() => {
    setDate(new Date());
  }, 1 * 1000);

  return (
    <div className="m-5">
      <div className="flex justify-between mb-2">
        <h1 className="text-3xl font-bold text-white">MJP Dashboard</h1>
        <h2 className="text-2xl font-semibold text-white">
          {date.toLocaleTimeString()}
        </h2>
      </div>
      <hr className="border-slate-600" />
      <div className="m-5 flex justify-end">
        <Tooltip tooltipText={"Notepad"} orientation="bottom">
          <a href="/">
            <FontAwesomeIcon icon={faNoteSticky} inverse size="2x" />
          </a>
        </Tooltip>
      </div>
    </div>
  );
}

export default Header;
