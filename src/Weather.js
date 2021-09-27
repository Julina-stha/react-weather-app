import React, { useState } from "react";
import WeatherData from "./WeatherData";
import axios from "axios";
import "./Weather.css";
import TempButton from "./TempButton";
import FiveDayForecast from "./FiveDayForecast";

export default function Weather(props) {
  const [unit, setUnit] = useState(`metric`);
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function submitResult(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      city: response.data.name,
      country: response.data.sys.country,
      temperature:response.data.main.temp,
      description: response.data.weather[0].description,
      wind: 12,
      humidity: response.data.main.humidity,
      dayandtime: new Date(response.data.dt * 1000),
      icon: response.data.weather[0].icon,
      sunrise: new Date(response.data.sys.sunrise * 1000),
      sunset: new Date(response.data.sys.sunset * 1000),
    })
  }

  function searchCity() {
    const apikey = "ba753d969dccd2973e89444d00d45191";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=${unit}`;
    axios.get(apiUrl).then(submitResult);
  }

  function onUnitChange(unit) {
    setUnit(unit);
    searchCity(unit);
  }

  function handleSubmit(event) {
    event.preventDefault();
    searchCity(unit);
    //searches for the city//
  }

  function handleCityValue(event) {
    setCity(event.target.value);
  }
  
  function handleCoordinates(position) {
    const apiKey = "ba753d969dccd2973e89444d00d45191";
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${unit}`;
    axios.get(url).then(submitResult);
  }

  function handleLocate(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(handleCoordinates);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
            <div className="col-9 btn">
              <input type="search" placeholder="Enter a City name" className="form-control" autocomplete="off" onChange={handleCityValue} />
            </div>
            <div className="col-1">
              <button type="submit" className="btn btn-link" id="icons">
                <i class="fas fa-search" ></i>
              </button>
            </div>
            <div className="col-2">
              <button type="submit" className="btn btn-link" id="icons" onClick={handleLocate}>
                <i class="fas fa-map-marker-alt"></i>
              </button>
            </div>
            <TempButton  onUnitChange={onUnitChange}/>
        </form>
        <WeatherData data={weatherData} unit={unit}/>
        <FiveDayForecast coordinates={weatherData.coordinates} unit={unit}/>
      </div>
    );
  } else {
    searchCity();
    return ("Loading...");
  }

 
}