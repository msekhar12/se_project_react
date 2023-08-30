//import React, { useEffect } from "react";

import "./Weather.css";
import sunnyDay from "../images/Sunny_Day.png";
//import { readWeatherData } from "../utils/weatherApi";

function Weather(props) {
  //const [lat, setLat] = React.useState(props.lat);
  //const [long, setLong] = React.useState(props.long);
  //const [temperature, setTemperature] = React.useState();
  //const [location, setLocation] = React.useState();

  //   useEffect(() => {
  //     readWeatherData(props.lat, props.long).then((data) => {
  //       setTemperature(data.main.temp);
  //       //setLocation(data.name);
  //     });
  //   }, [props.lat, props.long]);

  return (
    <div className="weather">
      <img src={sunnyDay} alt="weather" className="weather__image" />
      <p className="weather__text">{`${props.temp}°F`}</p>
    </div>
  );
}

export default Weather;
