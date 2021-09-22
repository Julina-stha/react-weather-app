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
          <span className="five-day-forecast-max">19°</span>
          <span className="five-day-forecast-min">18°</span>
        </div>
        <div className="col">
          Tue
          <div className="five-day-icon">
            <WeatherIcon code="01n" size={20}/>
          </div>
          <span className="five-day-forecast-max">19°</span>
          <span className="five-day-forecast-min">18°</span>
        </div>
        <div className="col">
          Wed
          <div className="five-day-icon">
            <WeatherIcon code="02d" size={20}/>
          </div>
          <span className="five-day-forecast-max">19°</span>
          <span className="five-day-forecast-min">20°</span>
        </div>
        <div className="col">
          Thur
          <div className="five-day-icon">
            <WeatherIcon code="11d" size={20}/>
          </div>
          <span className="five-day-forecast-max">25°</span>
          <span className="five-day-forecast-min">24°</span>
        </div>
        <div className="col">
          Fri
          <div className="five-day-icon">
            <WeatherIcon code="13n" size={20}/>
          </div>
          <span className="five-day-forecast-max">33°</span>
          <span className="five-day-forecast-min">44°</span>
        </div>
      </div>
    </div>
  )
}