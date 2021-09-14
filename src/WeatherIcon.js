import React from "react";
import { ReactSkycon, SkyconType } from 'react-skycons-extended';
import "./Weather.css";


export default function WeatherIcon(props) {
  console.log(props.code);
  const iconMapping = {
    "01d": {
      icon: SkyconType.CLEAR_DAY,
      animate: true,
      color: {
        sun: `#fdd0488a`
      }
    },
    "01n": {
      icon: SkyconType.CLEAR_NIGHT,
      animate: true,
      color: {
        moon: 'aqua',
      }
    },
    "02d": {
      icon: SkyconType.PARTLY_CLOUDY_DAY,
      animate: true,
      color: {
        dark_cloud: 'purple',
        sun: `red`,
      }
    },
    "02n": {
      icon: SkyconType.PARTLY_CLOUDY_NIGHT,
      animate: true,
      color: {
        dark_cloud: 'purple',
        moon: `white`,
      }
    },
    "03d": {
      icon: SkyconType.CLOUDY,
      animate: true,
      color: {
        dark_cloud: 'purple',
      } 
    },
    "03n": {
      icon: SkyconType.CLOUDY,
      animate: true,
      color: {
        dark_cloud: 'purple',
      } 
    },
    "04d": {
      icon: SkyconType.CLOUDY,
      animate: true,
      color: {
        dark_cloud: 'purple',
      } 
    },
    "04n": {
      icon: SkyconType.CLOUDY,
      animate: true,
      color: {
        dark_cloud: 'purple',
      } 
    },
    "09d": {
      icon: SkyconType.RAIN,
      animate: true,
      color: {
        dark_cloud: 'purple',
      } 
    },
    "09n": {
      icon: SkyconType.RAIN,
      animate: true,
      color: {
        dark_cloud: 'purple',
      } 
    },
    "10d": {
      icon: SkyconType.SHOWERS_DAY,
      animate: true,
      color: {
        dark_cloud: 'purple',
        sun: `yellow`,
      } 
    },
    "10n": {
      icon: SkyconType.SHOWERS_NIGHT,
      animate: true,
      color: {
        dark_cloud: 'purple',
        moon: `yellow`,
      }
    },
    "11d": {
      icon: SkyconType.THUNDER,
      animate: true,
      color: {
        dark_cloud: 'purple',
      }
    },
    "11n": {
      icon: SkyconType.THUNDER,
      animate: true,
      color: {
        dark_cloud: 'purple',
      }
    },
    "13d": {
      icon: SkyconType.SNOW_SHOWERS_DAY,
      animate: true,
      color: {
        dark_cloud: 'purple',
        snow: `white`,
      }
    },
    "13n": {
      icon: SkyconType.SNOW_SHOWERS_NIGHT,
      animate: true,
      color: {
        dark_cloud: 'purple',
        snow: `white`,
      }
    },
    "50d": {
      icon: SkyconType.FOG,
      animate: true,
      color: {
        fog: `grey`,
      }
    },
    "50n": {
      icon: SkyconType.FOG,
      animate: true,
      color: {
        fog: `grey`,
      }
    },
  };

  return (
    <div className="weather-icon">
      <ReactSkycon
        icon={iconMapping[props.icon]}

      />
    </div>

  )
}