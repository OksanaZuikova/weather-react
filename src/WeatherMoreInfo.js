import React from "react";
import FormatedTime from "./FormatedTime";

export default function WeatherMoreInfo(props) {
  return (
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
  );
}
