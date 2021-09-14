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
        sun: `#ffe272`
      },
      size: 95,

    },
    "01n": {
      icon: SkyconType.CLEAR_NIGHT,
      animate: true,
      color: {
        moon: '#ffeea3',
      },
      size: 95,

    },
    "02d": {
      icon: SkyconType.PARTLY_CLOUDY_DAY,
      animate: true,
      color: {
        cloud: `#909090`,
        sun: `#ffe272`,
      },
      size: 95,

    },
    "02n": {
      icon: SkyconType.PARTLY_CLOUDY_NIGHT,
      animate: true,
      color: {
        cloud: `#909090`,
        moon: `#ffeea3`,
      },
      size: 95,

    },
    "03d": {
      icon: SkyconType.CLOUDY,
      animate: true,
      color: {
        cloud: '#909090',
      },
      size: 95,

    },
    "03n": {
      icon: SkyconType.CLOUDY,
      animate: true,
      color: {
        cloud: '#909090',
      },
      size: 95,

    },
    "04d": {
      icon: SkyconType.CLOUDY,
      animate: true,
      color: {
        cloud: '#909090',
      },
      size: 95,

    },
    "04n": {
      icon: SkyconType.CLOUDY,
      animate: true,
      color: {
        cloud: '#909090',
      },
      size: 95,

    },
    "09d": {
      icon: SkyconType.RAIN,
      animate: true,
      color: {
        cloud: '#909090',
        rain: `#6666ff`,
      },
      size: 95,

    },
    "09n": {
      icon: SkyconType.RAIN,
      animate: true,
      color: {
        cloud: '#909090',
        rain: `#6666ff`,
      },
      size: 95,

    },
    "10d": {
      icon: SkyconType.SHOWERS_DAY,
      animate: true,
      color: {
        cloud: '#909090',
        sun: `#ffe272`,
        rain: `#6666ff`,
      },
      size: 95,

    },
    "10n": {
      icon: SkyconType.SHOWERS_NIGHT,
      animate: true,
      color: {
        cloud: '#909090',
        moon: `#ffeea3`,
        rain:`#6666ff`,
      },
      size: 95,

    },
    "11d": {
      icon: SkyconType.THUNDER,
      animate: true,
      color: {
        cloud: '#909090',
        thunder: `#6666ff`,
      },
      size: 95,

    },
    "11n": {
      icon: SkyconType.THUNDER,
      animate: true,
      color: {
        cloud: '#909090',
        thunder: `#6666ff`,
      },
      size: 95,

    },
    "13d": {
      icon: SkyconType.SNOW_SHOWERS_DAY,
      animate: true,
      color: {
        cloud: '#909090',
        snow: `white`,
      },
      size: 95,

    },
    "13n": {
      icon: SkyconType.SNOW_SHOWERS_NIGHT,
      animate: true,
      color: {
        cloud: '#909090',
        snow: `white`,
      },
      size: 95,

    },
    "50d": {
      icon: SkyconType.FOG,
      animate: true,
      color: {
        fog: `grey`,
      },
      size: 95,

    },
    "50n": {
      icon: SkyconType.FOG,
      animate: true,
      color: {
        fog: `grey`,
      },
      size: 95,

    },
  };

  return (
    <div className="weather-icon">
      <ReactSkycon
        icon={iconMapping[props.code].icon}
        animate={iconMapping[props.code].animate}
        color={iconMapping[props.code].color}
        size={iconMapping[props.code].size}
      />
    </div>

  )
}