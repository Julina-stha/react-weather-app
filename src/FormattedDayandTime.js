import React from "react";

export default function FormattedDayandTime(props) {
  console.log(props.dayandtime);
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
    <span>
      {day} | {hours}:{minutes}
    </span>
  );
}