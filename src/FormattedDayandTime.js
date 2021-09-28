import React from "react";
import { getTime } from "./FunctionLibrary";


export default function FormattedDayandTime(props) {
  let LocalTime = getTime(props.dayandtime, props.timezone);

  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  let day = days[props.dayandtime.getDay()];
  let hours = props.dayandtime.getHours();
  let minutes = props.dayandtime.getMinutes();
   
  if (hours < 10) {
    hours = `0${hours}`;
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return (
    <div>
      <span className="more-weather-text"><i class="fas fa-clock"></i> {day} <span className="time">{LocalTime}</span></span>
    </div>
  );
}