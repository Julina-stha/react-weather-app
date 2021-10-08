import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import TempButton from "./TempButton";
import FourDayForecast from "./FourDayForecast";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function submitResult(response) {
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
      sunrise: response.data.sys.sunrise * 1000,
      sunset: response.data.sys.sunset * 1000,
      timezone: Math.round(response.data.timezone / 3600),

    })
  }

  function searchCity() {
    const apikey = "ae004f22818d2b0da8c77b46a6027d96";
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
  
  function handleCoordinates(position) {
    const apiKey = "ae004f22818d2b0da8c77b46a6027d96";
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
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
        </form>
        <TempButton  data={weatherData} />
        <FourDayForecast coordinates={weatherData.coordinates} />
      </div>
    );
  } else {
    searchCity();
    return (<div>
      <img src="https://img.icons8.com/external-becris-lineal-color-becris/64/000000/external-loading-data-visualization-becris-lineal-color-becris.png" alt="Please wait :)"/>
    </div>);
  }

 
}