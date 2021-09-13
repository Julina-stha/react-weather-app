import React, { useState } from "react";
import FormattedDayandTime from "./FormattedDayandTime";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {

  const [weatherData, setWeatherData] = useState({ ready: false });

  function submitResult(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      city: response.data.name,
      country: response.data.sys.country,
      temperature:response.data.main.temp,
      description: response.data.weather[0].description,
      wind: 12,
      humidity: response.data.main.humidity,
      dayandtime: new Date(response.data.dt * 1000),
      
    })
  }

  
  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input type="search" placeholder="Enter a City name" className="form-control" />
            </div>
            <div className="col-3">
              <input type="submit" className="btn btn-primary" value="Search" />
            </div>
          </div>
        </form>
        <h1>{weatherData.city}, {weatherData.country}</h1>
        <h2>{Math.round(weatherData.temperature)}°C</h2>
        <ul className="small-text">
          <li className ="text-capitalize">{weatherData.description} | 10/09/2021 </li>
        </ul>
        <ul className="more-weather-info">
          <li className="humidity">Humidity: {Math.round(weatherData.humidity)}%</li>
          <li className="day-time"> <FormattedDayandTime dayandtime ={weatherData.dayandtime} /></li>
          <li>Wind: {weatherData.wind} km/h</li>
        </ul>
        <div className="switch">
          <div className="btn_group">
            <input type="submit" className="Hourly" value="Hourly" />
            <div className="btn_bg"></div>
            <input type="submit" className="Daily" value="Daily" />
          </div>
        </div>
      </div>
    );
  } else {
    const apikey = "ba753d969dccd2973e89444d00d45191";
    let city = "Kathmandu";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;
    axios.get(apiUrl).then(submitResult);
    return ("Loading...");
  }

 
}