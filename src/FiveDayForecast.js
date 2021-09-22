import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./FiveDayForecast.css";

export default function FiveDayForecast() {
  return(
    <div className="five-day-forecast">
      <div className="row">
        <div className="col">
          Mon
          <div className="five-day-icon">
            <WeatherIcon code="01d" size={20} />
          </div>
          <span className="five-day-forecast-max">19</span>
          <span className="five-day-forecast-min">18</span>
        </div>
        <div className="col">
          Mon
          <div className="five-day-icon">
            <WeatherIcon code="01n" size={20}/>
          </div>
          <span className="five-day-forecast-max">19</span>
          <span className="five-day-forecast-min">18</span>
        </div>
        <div className="col">
          Mon
          <div className="five-day-icon">
            <WeatherIcon code="02d" size={20}/>
          </div>
          <span className="five-day-forecast-max">19</span>
          <span className="five-day-forecast-min">18</span>
        </div>
        <div className="col">
          Mon
          <div className="five-day-icon">
            <WeatherIcon code="11d" size={20}/>
          </div>
          <span className="five-day-forecast-max">19</span>
          <span className="five-day-forecast-min">18</span>
        </div>
        <div className="col">
          Mon
          <div className="five-day-icon">
            <WeatherIcon code="13n" size={20}/>
          </div>
          <span className="five-day-forecast-max">19</span>
          <span className="five-day-forecast-min">18</span>
        </div>
      </div>
    </div>
  )
}