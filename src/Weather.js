import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import WeatherMoreInfo from "./WeatherMoreInfo";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coord: response.data.coord,
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
      icon: response.data.weather[0].icon,
    });
  }

  function search() {
    const apiKey = "094780c710fa4efd669f0df8c3991927";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function retrievePosition(position) {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    let apiKey = "4153903a26a56002551e2a95d2d2783b";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function showCurrentWeather(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(retrievePosition);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter the city"
            autocomplete="off"
            id="search-text-input"
            onChange={handleCityChange}
          />
          <button type="submit" className="btn btn-primary ms-1">
            Search
          </button>
          <button className="btn btn-location" onClick={showCurrentWeather}>
            Current
          </button>
        </form>
        <WeatherInfo data={weatherData} />
        <WeatherForecast data={weatherData} />
        <WeatherMoreInfo data={weatherData} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
