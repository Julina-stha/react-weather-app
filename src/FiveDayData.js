import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./FiveDayForecast.css";


export default function FiveDayData(props) {

  function max() {
    let maxTemp = Math.round(props.fiveDayData.max);
    return `${maxTemp}°`;
  }
  
  function min() {
    let minTemp = Math.round(props.fiveDayData.min);
    return `${minTemp}°`;
  }

  function day() {
    let date = new Date(props.fiveDayData.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"]

    return (days[day]);
  }

  return (
    <div>
        {day}
        <div className="five-day-icon">
          <WeatherIcon code={props.fiveDayData.weathe[0].icon} size={20} />
        </div>
        <span className="five-day-forecast-max">{max}</span>
        <span className="five-day-forecast-min">{min}</span>
      </div>
  )
}