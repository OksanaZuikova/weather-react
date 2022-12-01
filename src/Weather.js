import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import FormateDate from "./FormateDate";
import FormateTime from "./FormateTime";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      date: new Date(response.data.dt * 1000),
      time: "23:35",
      city: response.data.name,
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed),
      pressure: response.data.main.pressure,
      sunrise: new Date(response.data.sys.sunrise * 1000),
      sunset: new Date(response.data.sys.sunset * 1000),
      cloud: response.data.clouds.all,
      min_temperature: Math.round(response.data.main.temp_min),
      max_temperature: Math.round(response.data.main.temp_max),
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <input
            type="text"
            placeholder="Enter the city"
            autocomplete="off"
            id="search-text-input"
          />
          <button type="submit" className="btn btn-primary">
            Search
          </button>
          <button className="btn btn-location">Current</button>
        </form>
        <div className="row">
          <div className="col-12 current-value">
            <div className="row city">
              <div className="col-7">
                <h1>{weatherData.city}</h1>
              </div>
              <div className="col-5">
                <ul className="current-time">
                  <FormateDate date={weatherData.date} />
                </ul>
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                <p className="temperature">
                  <img
                    src={weatherData.icon}
                    alt={weatherData.description}
                    className="weather-icon"
                  />
                  <span className="degrees">{weatherData.temperature}</span> °C
                  <br />
                  <span className="main-description text-capitalize">
                    {weatherData.description}
                  </span>
                </p>
              </div>
              <div className="col-6">
                <p className="description">
                  Humidity: <span>{weatherData.humidity}</span>%
                  <br />
                  Wind: <span>{weatherData.wind}</span> km/h
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="weather-forecast"></div>
        <div className="row add-inform">
          <div className="col-6">
            <h3>Pressure</h3>
            <h3>Sunrise</h3>
            <h3>Sunset</h3>
            <h3>Cloud Cover</h3>
            <h3>Min temperature</h3>
            <h3>Max temperature</h3>
          </div>
          <div className="col-6 add-inform-values">
            <p>
              <span>{weatherData.pressure}</span> mb
            </p>
            <p>
              <FormateTime time={weatherData.sunrise} /> am
            </p>
            <p>
              <FormateTime time={weatherData.sunset} /> pm
            </p>
            <p>
              <span>{weatherData.cloud}</span>%
            </p>
            <p>
              <span>{weatherData.min_temperature}</span>°C
            </p>
            <p>
              <span>{weatherData.max_temperature}</span>°C
            </p>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "094780c710fa4efd669f0df8c3991927";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
