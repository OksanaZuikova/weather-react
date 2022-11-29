import React from "react";
import "./Weather.css";

export default function Weather() {
  let weatherData = {
    date: "13.11.22",
    time: "23:35",
    city: "Paris",
    temperature: "11",
    description: "Cloudy",
    humidity: "15",
    wind: "4",
    pressure: "5",
    sunrise: "6:10",
    sunset: "7:20",
    cloud: "60",
    min_temperature: "9",
    max_temperature: "13",
  };
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
                <li>{weatherData.date}</li>
                <li>{weatherData.time}</li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <p className="temperature">
                <img
                  src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
                  alt="icon"
                  className="weather-icon"
                />
                <span className="degrees">{weatherData.temperature}</span> °C
                <br />
                <span className="main-description">
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
            <span>{weatherData.sunrise}</span> am
          </p>
          <p>
            <span>{weatherData.sunset}</span> pm
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
        <p class="git">
          <a
            href="/https://github.com/OksanaZuikova/weather-react"
            target="_blank"
            className="git-link"
          >
            Open-sourse code
          </a>{" "}
          by Oksana Zuikova
        </p>
      </div>
    </div>
  );
}
