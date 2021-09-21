import React from "react";
import FormattedDayandTime from "./FormattedDayandTime";
import WeatherTemp from "./WeatherTemp";
import WeatherIcon from "./WeatherIcon";
import "./Weather.css";


export default function WeatherData(props) {

  return (
    <div className="weatherData">
      <h1>{props.data.city}, {props.data.country}</h1>
      <WeatherTemp celsius={Math.round(props.data.temperature)} />
      <ul>
        <li className="sunrise">
          <img src="https://img.icons8.com/office/80/000000/sunrise--v1.png" alt="sunset" width="45" height="45" />
          <hr/>
          Sunrise: 05:20
        </li>
        <li className="sunset">
          <img src="https://img.icons8.com/office/80/000000/sunset--v1.png" alt="sunset" width="45" />
          <hr/>
          Sunset: 07:20
        </li>
      </ul>
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
        <input className="second-switch" type="checkbox" ></input>
      </div>
    </div>
  )
}