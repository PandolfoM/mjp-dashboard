import React, { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNoteSticky } from "@fortawesome/free-regular-svg-icons";
import Tooltip from "../Tooltip";
import { Context } from "../../utils/store";
import config from "../../config.json";
import { faGear } from "@fortawesome/free-solid-svg-icons";

function Header() {
  const [state, dispatch] = useContext(Context);
  const [date, setDate] = useState(new Date());

  if (config.showTime){
    setInterval(() => {
      setDate(new Date());
    }, 1 * 1000);
  }

  const handleClick = (e) => {
    if (e.target.ariaLabel === "notes") {
      dispatch({
        type: "SET_NOTEPAD",
        payload: true,
      });
    } else {
      dispatch({
        type: "SET_CONFIG",
        payload: true,
      });
    }
  };

  return (
    <div className="m-5">
      <div className="flex justify-between mb-2">
        <h1 className="text-3xl font-bold text-white">{config.title}</h1>
        <h2 className="text-2xl font-semibold text-white">
          {config.showTime && date.toLocaleTimeString()}
        </h2>
      </div>
      <hr className="border-slate-600" />
      <div className="m-5 flex justify-end gap-4">
        <Tooltip tooltipText={"Notepad"} orientation="bottom" >
          <button onClick={handleClick}>
            <FontAwesomeIcon icon={faNoteSticky} aria-label="notes" inverse size="xl" />
          </button>
        </Tooltip>
      </div>
    </div>
  );
}

export default Header;
