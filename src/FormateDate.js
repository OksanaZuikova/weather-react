import React from "react";

export default function FormateDate(props) {
  let date = props.date.getDate();
  if (date < 10) {
    date = `0${date}`;
  }
  let month = props.date.getMonth();
  let year = props.date.getFullYear();
  let hour = props.date.getHours();
  let minutes = props.date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let months = [
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
  ];
  return (
    <div>
      <li>
        {date}.{months[month]}.{year}
      </li>
      <li>
        {hour}:{minutes}
      </li>
    </div>
  );
}
