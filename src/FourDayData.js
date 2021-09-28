import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./FourDayForecast.css";


export default function FourDayData(props) {

  function max() {
    let maxTemp = Math.round(props.daydata.temp.max);
    return `${maxTemp}°`;
  }
  
  function min() {
    let minTemp = Math.round(props.daydata.temp.min);
    return `${minTemp}°`;
  }

  function day() {
    let date = new Date(props.daydata.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"]

    return (days[day]);
  }

  return (
    <div>
        {day()}
        <div className="four-day-icon">
          <WeatherIcon code={props.daydata.weather[0].icon} size={20} />
        </div>
        <span className="four-day-forecast-max">{max()}</span>
        <span className="four-day-forecast-min">{min()}</span>
      </div>
  )
}