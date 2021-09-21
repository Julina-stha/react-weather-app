import React from "react";
import ToggleSwitch from "./ToggleSwitch";
import "./Weather.css";

export default function WeatherTemp(props) {
  let fahrenheitFormula = Math.round((props.celsius * 9) / 5 + 32)

  if (ToggleSwitch.target.checked) {
    return (
      <h2>{fahrenheitFormula}°F</h2>
    )
  } else {
    return (<h2>{Math.round(props.celsius)}°C</h2>);
  }
}
