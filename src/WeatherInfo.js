import React from "react";
import FormatedDate from "./FormatedDate";
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
              <ul className="current-date">
                <FormatedDate date={props.data.date} />
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <p className="temperature">
                <span className="degrees d-flex align-items-center ms-3 mb-3">
                  <WeatherIcon code={props.data.icon} size={64} />
                  <span className="temp">{props.data.temperature}</span> °C
                </span>
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
    </div>
  );
}
