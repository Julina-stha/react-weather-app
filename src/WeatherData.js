import React from "react";
import FormattedDayandTime from "./FormattedDayandTime";
import WeatherIcon from "./WeatherIcon";
import "./Weather.css";


export default function WeatherData(props) {
  return (
    <div className="weatherData">
      <h1>{props.data.city}, {props.data.country}</h1>
      <h2>{Math.round(props.data.temperature)}°C</h2>
      <WeatherIcon code = {props.data.icon}/>
      <ul className="small-text">
        <li className ="text-capitalize">{props.data.description} | 10/09/2021 </li>
      </ul>
      <ul className="more-weather-info">
        <li className="humidity">Humidity: {Math.round(props.data.humidity)}%</li>
        <li className="day-time"> <FormattedDayandTime dayandtime ={props.data.dayandtime} /></li>
        <li>Wind: {props.data.wind} km/h</li>
      </ul>
      <div className="switch">
        <div className="btn_group">
          <input type="submit" className="Hourly" value="Hourly" />
          <div className="btn_bg"></div>
          <input type="submit" className="Daily" value="Daily" />
        </div>
      </div>
    </div>
  )
}