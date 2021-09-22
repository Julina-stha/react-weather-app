import React from "react";
import "./Weather.css";


export default function FormatDate(props) {
let currentDate = props.date.getDate();
  if (currentDate < 10) {
    currentDate = `0${currentDate}`;
  }
  let month = props.date.getMonth() + 1;
  if (month < 10) {
    month = `0${month}`;
  }
  let year = props.date.getFullYear();
  return (
    <span>
      {currentDate}/{month}/{year}
    </span>
  );
}