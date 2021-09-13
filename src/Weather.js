import React, { useState } from "react";
import WeatherData from "./WeatherData";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {

  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

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
      icon: response.data.weather[0].icon,
    })
  }

  function searchCity() {
    const apikey = "ba753d969dccd2973e89444d00d45191";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;
    axios.get(apiUrl).then(submitResult);
  }

  function handleSubmit(event) {
    event.preventDefault();
    searchCity();
    //searches for the city//
  }

  function handleCityValue(event) {
    setCity(event.target.value);
  }
  
  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input type="search" placeholder="Enter a City name" className="form-control" onChange={handleCityValue} />
            </div>
            <div className="col-3">
              <input type="submit" className="btn btn-primary" value="Search" />
            </div>
          </div>
        </form>
        <WeatherData data = {weatherData} />
      </div>
    );
  } else {
    searchCity();
    return ("Loading...");
  }

 
}