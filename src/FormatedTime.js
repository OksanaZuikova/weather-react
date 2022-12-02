import React from "react";

export default function FormateTime(props) {
  let minutes = props.time.getMinutes();
  let hours = props.time.getHours();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return (
    <span>
      {hours}:{minutes}
    </span>
  );
}
