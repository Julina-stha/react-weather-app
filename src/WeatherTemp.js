import React from "react";
import "./Weather.css";

export default function WeatherTemp(props) {

    return (<h2>{Math.round(props.celsius)}°C</h2>);

}
