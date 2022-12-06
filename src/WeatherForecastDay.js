import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function defineMaxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°C`;
  }

  function defineMinTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°C`;
  }

  function defineDay() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    return days[day];
  }
  return (
    <div className="col">
      <p>{defineDay()}</p>
      <WeatherIcon code={props.data.weather[0].icon} size="40" />
      <p className="forecast-temperature">
        <div>{defineMaxTemperature()}</div>
        <div className="min-temp">{defineMinTemperature()}</div>
      </p>
    </div>
  );
}
