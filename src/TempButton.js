import React from "react";
import "./Weather.css";

export default function TempButton() {
  
  function convertToF(event) {
    event.preventDefault();

  }
  return (
    <div className="col-3">
      <div className="btn-group btn-group-mb-2">
        <button type="button" className="btn btn btn-primary" id="cel">°C</button><span className="break">|</span>
        <button type="button" className="btn btn btn-primary" id="fah" onClick={convertToF}>°F</button>
      </div>
    </div>
  )
}