import React from "react";
import "./Weather.css";
import { getTime } from "./FunctionLibrary";


export default function SunriseSunsetTime(props) {
  let sunriseFormatTime = getTime(props.riseTime, props.timezone);
  let sunsetFormatTime = getTime(props.setTime, props.timezone);

  
  return (
    <div>
      <ul>
        <li className="sunrise">
          <img src="https://img.icons8.com/office/80/000000/sunrise--v1.png" alt="sunset" width="45" height="45" />
          <hr />
          <span className="blue-text">Sunrise: </span> {sunriseFormatTime}
        </li>
        <li className="sunset">
          <img src="https://img.icons8.com/office/80/000000/sunset--v1.png" alt="sunset" width="45" />
          <hr/>
          <span className="red-text">Sunset: </span> {sunsetFormatTime}
        </li>
      </ul>
    </div>
  )
}