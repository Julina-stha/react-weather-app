import React from "react";
import "./Weather.css";

export default function TempButton(event) {
  return (
    <div className="col-3">
      <div className="btn-group btn-group-mb-2">
        <button type="button" className="btn btn btn-primary" id="cel">°C</button><span className="break">|</span>
        <button type="button" className="btn btn btn-primary" id="fah">°F</button>
      </div>
    </div>
  )
}