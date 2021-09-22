import React from "react";
import FormattedDayandTime from "./FormattedDayandTime";
import FormatDate from "./FormatDate";
import WeatherTemp from "./WeatherTemp";
import SunriseSunsetTime from "./SunriseSunsetTime";
import WeatherIcon from "./WeatherIcon";
import "./Weather.css";


export default function WeatherData(props) {

  return (
    <div className="weatherData">
      <h1>{props.data.city}, {props.data.country}</h1>
      <WeatherTemp celsius={Math.round(props.data.temperature)} />
      <SunriseSunsetTime riseTime={props.data.sunrise} setTime={props.data.sunset}/>
      <WeatherIcon code = {props.data.icon}/>
      <ul className="small-text">
        <li className="text-capitalize">
          {props.data.description} | <FormatDate date={props.data.dayandtime} />
        </li>
      </ul>
      <ul className="more-weather-info">
        <li className="humidity">
          Humidity: {Math.round(props.data.humidity)}%
        </li>
        <li className="day-time">
          <FormattedDayandTime dayandtime={props.data.dayandtime} /></li>
        <li>
          Wind: {props.data.wind} km/h
        </li>
      </ul>
    <div className="switch">
      <div className="btn-group btn-group-mb-2">
        <button type="button" className="btn btn btn-primary" id="hourly">Hourly</button>
        <button type="button" className="btn btn btn-primary" id="daily">Daily</button>
      </div>
    </div>
    </div>
  )
}