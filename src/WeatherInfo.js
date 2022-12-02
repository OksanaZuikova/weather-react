import React from "react";
import FormatedDate from "./FormatedDate";
import FormatedTime from "./FormatedTime";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div>
      <div className="row">
        <div className="col-12 current-value">
          <div className="row city">
            <div className="col-7">
              <h1>{props.data.city}</h1>
            </div>
            <div className="col-5">
              <ul className="current-time">
                <FormatedDate date={props.data.date} />
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <p className="temperature">
                <div className="degrees d-flex align-items-center ms-3 mb-3">
                  <WeatherIcon code={props.data.icon} />
                  <span className="ms-4">{props.data.temperature}</span> °C
                </div>

                <span className="main-description text-capitalize">
                  {props.data.description}
                </span>
              </p>
            </div>
            <div className="col-6">
              <p className="description">
                Humidity: <span>{props.data.humidity}</span>%
                <br />
                Wind: <span>{props.data.wind}</span> km/h
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
            <span>{props.data.pressure}</span> mb
          </p>
          <p>
            <FormatedTime time={props.data.sunrise} /> am
          </p>
          <p>
            <FormatedTime time={props.data.sunset} /> pm
          </p>
          <p>
            <span>{props.data.cloud}</span>%
          </p>
          <p>
            <span>{props.data.min_temperature}</span>°C
          </p>
          <p>
            <span>{props.data.max_temperature}</span>°C
          </p>
        </div>
      </div>
    </div>
  );
}
