import React, { useState } from "react";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div>
        <div className="weather-forecast">
          <div className="row days">
            {forecast.map(function (dailyForecast, index) {
              if (index < 5) {
                return <WeatherForecastDay key={index} data={dailyForecast} />;
              }
              return null;
            })}
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "97f8e93f00107773f88eafd933ce86b7";
    const apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.data.coord.lat}&lon=${props.data.coord.lon}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return null;
  }
}
