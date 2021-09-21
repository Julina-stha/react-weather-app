import React from "react";
import "./Weather.css";

export default function TempToggle(event) {
  return (
    <div className="col-3">
      <div className="form-check form-switch">
        <label className="form-check-label" for="flexSwitchCheckDefault">°C</label>
        <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
        <label className="form-check-label2" for="flexSwitchCheckDefault">°F</label>
      </div>
    </div>
  )
}