import React from "react";
import FormattedDayandTime from "./FormattedDayandTime";
import FormatDate from "./FormatDate";
import SunriseSunsetTime from "./SunriseSunsetTime";
import WeatherIcon from "./WeatherIcon";
import "./Weather.css";


export default function WeatherData(props) {


  return (
    <div className="weatherData">
      <h1>{props.data.city}, {props.data.country}</h1>
      <h2>{Math.round(props.data.temperature)}°</h2>
      <SunriseSunsetTime riseTime={props.data.sunrise} setTime={props.data.sunset} timezone={props.data.timezone}/>
      <WeatherIcon code={props.data.icon} />
      <div className="small-text">
        <ul >
          <li className="text-capitalize">
            {props.data.description}
          </li>
          <li>
          <FormatDate date={props.data.dayandtime} />
          </li>
        </ul>
      </div>
      <ul className="more-weather-info">
        <li>
          <span className="more-weather-text"><i class="fas fa-tint" aria-hidden="true"></i> Humidity: </span> {Math.round(props.data.humidity)}%
        </li>
        <li>
          <FormattedDayandTime dayandtime={props.data.dayandtime} timezone={props.data.timezone}/>
        </li>
        <li>
          <span className="more-weather-text"><i class="fas fa-wind"></i> Wind: </span>{props.data.wind}km/h
        </li> 
      </ul>
    </div>
  )
}