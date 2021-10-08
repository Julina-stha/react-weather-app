import React, { useEffect, useState } from "react";
import axios from "axios";
import FourDayData from "./FourDayData";
import "./FourDayForecast.css";


export default function FourDayForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast({
      hourly: response.data.hourly,
      daily: response.data.daily,
    });
    setLoaded(true);
  }


  useEffect(() => {
    setLoaded(false);//changes the state of setLoaded to false - this will update the fivedayforecast everytime coordinates is updated//
  }, [props.coordinates]);// if the coordinate changes//

  if (loaded) {
    return (
      <div className="four-day-forecast">
        <div className="row">
            {forecast.daily.map(function (dailyForecast, index) {
              if (index < 4) {
                return (
                  <div className="col" key={index}>
                    <FourDayData daydata={dailyForecast} />
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
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude={part}&appid=${apiKey}&units=metric`;
  
    axios.get(apiUrl).then(handleResponse);
    return null;
  }

}