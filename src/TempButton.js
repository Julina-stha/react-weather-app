import React, { useState } from "react";
import WeatherData from "./WeatherData";
import FourDayForecast from "./FourDayForecast";
import FourDayForecastFahrenheit from "./FourDayForecastFahrenheit";
import "./Weather.css";

export default function TempButton(props) {
  const [unit, setUnit] = useState("metric")

  function convertToFahrenheit(event) {
    event.preventDefault();
    setUnit("imperial");
  }

    function convertToCelsius(event) {
    event.preventDefault();
    setUnit("metric");
  }

  if (unit === "metric") {
    return (
      <div>
        <div className="temp-button">
          <div className="btn-group btn-group-mb-2" id="tempButtonID">
            <button type="button" className="btn btn btn-primary" id="cel" onClick={convertToCelsius}>°C</button><span className="break">|</span>
            <button type="button" className="btn btn btn-primary" id="fah"  onClick={convertToFahrenheit} >°F</button>
          </div>
        </div>
        <div className="weatherInfo">
          <h1>{props.data.city}, {props.data.country}</h1>
          <h2>{Math.round(props.data.temperature)}°C</h2>
          <WeatherData data={props.data} />
          <FourDayForecast coordinates={props.coordinates} />
        </div>
      </div>
    )
  } else {
    let celsius = props.data.temperature
    let fahrenheit = Math.round((celsius * 1.8) + 32);
    return (
      <div>
        <div className="temp-button">
          <div className="btn-group btn-group-mb-2" id="tempButtonID">
            <button type="button" className="btn btn btn-primary" id="cel" onClick={convertToCelsius}>°C</button><span className="break">|</span>
            <button type="button" className="btn btn btn-primary" id="fah" onClick={convertToFahrenheit} >°F</button>
          </div>
        </div>
        <div className="weatherInfo">
          <h1>{props.data.city}, {props.data.country}</h1>
          <h2>{fahrenheit}°F</h2>
          <WeatherData data={props.data} />
          <FourDayForecastFahrenheit coordinates={props.coordinates} />
        </div>
      </div>
    );
  }
}