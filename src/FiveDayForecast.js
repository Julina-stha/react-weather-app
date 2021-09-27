import React, { useEffect, useState } from "react";
import axios from "axios";
import FiveDayData from "./FiveDayData";
import "./FiveDayForecast.css";


export default function FiveDayForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    console.log(response.data);
    setForecast(response.data.daily)
    setLoaded(true);
  }

  useEffect(() => {
    setLoaded(false);//changes the state of setLoaded to false - this will update the fivedayforecast everytime coordinates is updated//
  }, [props.coordinates, props.unit]);// if the coordinate changes//

  if (loaded) {
    return (
      <div className="five-day-forecast">
        <div className="switch">
          <div className="btn-group btn-group-mb-2">
            <button type="button" className="btn btn btn-primary" id="hourly">Hourly</button>
            <button type="button" className="btn btn btn-primary" id="daily" >Daily</button>
          </div>
        </div>
        <div className="row">
            {forecast.map(function (dailyForecast, index) {
              if (index < 5) {
                return (
                  <div className="col" key={index}>
                    <FiveDayData fiveDayData={dailyForecast} />
                  </div>
                )
              } else {
                return null;
              }
            })}
        </div>
      </div>
    );
  } else {
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiKey = "ae004f22818d2b0da8c77b46a6027d96";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude={part}&appid=${apiKey}&units=${props.unit}`;
  
    axios.get(apiUrl).then(handleResponse);
    return null;
  }

}
 