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
            <input type= "submit" className="btn btn-primary" value="search" />
          </div>
        </div>      
      </form>
      <h1>Kathmandu</h1>
      <ul>
        <li>Temperature</li>
        <li>Date</li>
        <li>Local Time and Day</li>
      </ul>
    </div>
  )
}