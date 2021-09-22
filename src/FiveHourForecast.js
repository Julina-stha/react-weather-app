import React from "react";
import WeatherIcon from "./WeatherIcon";
import axios from "axios";
import "./FiveHourForecast.css";


export default function FiveHourForecast(props) {

  function handleResponse(response) {
    console.log(response.data);
  }
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let apiKey = "ba753d969dccd2973e89444d00d45191";
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude={part}&appid=${apiKey}&units=metric`;
  
  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="five-hour-forecast">
      <div className="row">
        <div className="col">
          17:00
          <div className="five-hour-icon">
            <WeatherIcon code="01d" size={20} />
          </div>
          <span className="five-hour-forecast-max">19°</span>
          <span className="five-hour-forecast-min">18°</span>
        </div>
        <div className="col">
          18:00
          <div className="five-hour-icon">
            <WeatherIcon code="02n" size={20} />
          </div>
          <span className="five-hour-forecast-max">19°</span>
          <span className="five-hour-forecast-min">18°</span>
        </div>
        <div className="col">
          19:00
          <div className="five-hour-icon">
            <WeatherIcon code="03d" size={20} />
          </div>
          <span className="five-hour-forecast-max">19°</span>
          <span className="five-hour-forecast-min">20°</span>
        </div>
        <div className="col">
          20:00
          <div className="five-hour-icon">
            <WeatherIcon code="04d" size={20} />
          </div>
          <span className="five-hour-forecast-max">25°</span>
          <span className="five-day-forecast-min">24°</span>
        </div>
        <div className="col">
          21:00
          <div className="five-hour-icon">
            <WeatherIcon code="09n" size={20} />
          </div>
          <span className="five-hour-forecast-max">33°</span>
          <span className="five-hour-forecast-min">44°</span>
        </div>
      </div>
    </div>
  )
}
 