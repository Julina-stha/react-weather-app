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
        sun: `#ffd941`
      },
      size: 95,

    },
    "01n": {
      icon: SkyconType.CLEAR_NIGHT,
      animate: true,
      color: {
        moon: '#ffe675',
      },
      size: 100,

    },
    "02d": {
      icon: SkyconType.PARTLY_CLOUDY_DAY,
      animate: true,
      color: {
        light_cloud: `#999999`,
        sun: `#ffd941`,
      },
      size: 90,

    },
    "02n": {
      icon: SkyconType.PARTLY_CLOUDY_NIGHT,
      animate: true,
      color: {
        light_cloud: `#7a7a7ad7`,
        moon: `#ffe675`,
      },
      size: 90,

    },
    "03d": {
      icon: SkyconType.CLOUDY,
      animate: true,
      color: {
        light_cloud: '#7a7a7ad7',
      },
      size: 90,

    },
    "03n": {
      icon: SkyconType.CLOUDY,
      animate: true,
      color: {
        light_cloud: '#7a7a7ad7',
      },
      size: 90,
    },

    "04d": {
      icon: SkyconType.CLOUDY,
      animate: true,
      color: {
        light_cloud: '#7a7a7ad7',
      },
      size: 90,
    },

    "04n": {
      icon: SkyconType.CLOUDY,
      animate: true,
      color: {
        light_cloud: '#7a7a7ad7',
      },
      size: 90,
    },

    "09d": {
      icon: SkyconType.RAIN,
      animate: true,
      color: {
        light_cloud: '#7a7a7ad7',
        rain: `#6666ff`,
      },
      size: 95,

    },
    "09n": {
      icon: SkyconType.RAIN,
      animate: true,
      color: {
        cloud: '#7a7a7ad7',
        rain: `#6666ff`,
      },
      size: 95,

    },
    "10d": {
      icon: SkyconType.SHOWERS_DAY,
      animate: true,
      color: {
        cloud: 'white',
        sun: `#ffd941`,
        rain: `#6666ff`,
      },
      size: 100,

    },
    "10n": {
      icon: SkyconType.SHOWERS_NIGHT,
      animate: true,
      color: {
        cloud: 'white',
        moon: `#ffe675`,
        rain:`#6666ff`,
      },
      size: 100,

    },
    "11d": {
      icon: SkyconType.THUNDER,
      animate: true,
      color: {
        dark_cloud: '#7a7a7ad7',
        thunder: `#6666ff`,
      },
      size: 95,

    },
    "11n": {
      icon: SkyconType.THUNDER,
      animate: true,
      color: {
        light_cloud: '#7a7a7ad7',
        thunder: `#6666ff`,
      },
      size: 95,

    },
    "13d": {
      icon: SkyconType.SNOW_SHOWERS_DAY,
      animate: true,
      color: {
        light_cloud: '#7a7a7ad7',
        sun: `#ffd941`,
        snow: `white`,
      },
      size: 95,

    },
    "13n": {
      icon: SkyconType.SNOW_SHOWERS_NIGHT,
      animate: true,
      color: {
        cloud: '#7a7a7ad7',
        moon: `#ffe675`,
        snow: `white`,
      },
      size: 95,
    },

    "50d": {
      icon: SkyconType.FOG,
      animate: true,
      color: {
        light_cloud: `white`,
        fog: `#e0dfdf`,
      },
      size: 95,

    },
    "50n": {
      icon: SkyconType.FOG,
      animate: true,
      color: {
        light_cloud: `white`,
        fog: `#e0dfdf`,
      },
      size: 95,
    },
  };

  return (
    <div className="weather-icon">
      <ReactSkycon icon={iconMapping[props.code].icon} animate={iconMapping[props.code].animate} color={iconMapping[props.code].color} size={iconMapping[props.code].size}
      />
    </div>
  )
}