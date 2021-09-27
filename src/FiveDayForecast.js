import React, { useEffect, useState } from "react";
import axios from "axios";
import FiveDayData from "./FiveDayData";
import "./FiveDayForecast.css";


export default function FiveDayForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    console.log(response.data);
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
      <div className="five-day-forecast">
        <div className="switch">
          <div className="btn-group btn-group-mb-2">
            <button type="button" className="btn btn btn-primary" id="hourly" >Hourly</button>
            <button type="button" className="btn btn btn-primary" id="daily" >Daily</button>
          </div>
        </div>
        <div className="row">
            {forecast.daily.map(function (dailyForecast, index) {
              if (index < 4) {
                return (
                  <div className="col" key={index}>
                    <FiveDayData daydata={dailyForecast} />
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
    let apiKey = "3cdeb2ae4d82e41c2c50a8a041cb1b0c";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude={part}&appid=${apiKey}&units=${props.unit}`;
  
    axios.get(apiUrl).then(handleResponse);
    return null;
  }

}
 