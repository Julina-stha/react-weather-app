import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input type="search" placeholder="Enter a City name" className="form-control" />
          </div>
          <div className="col-3">
            <input type= "submit" className="btn btn-primary" value="Search" />
          </div>
        </div>      
      </form>
      <h1>Kathmandu, NP</h1>
      <h2>30°C</h2>
      <ul className="small-text">
        <li>Clear Sky | Friday</li>

      </ul>
      <ul className="more-weather-info">
        <li className="humidity">Humidity: 79%</li>
        <li className="date-time">10/09/2021 | 12:32</li>
        <li>Wind: 6.26km/h</li>
      </ul>

    </div>
  )
}