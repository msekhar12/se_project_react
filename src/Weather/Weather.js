//import React, { useEffect } from "react";

import cloudyDay from "../images/cloudyDay.png";
import cloudyNight from "../images/cloudyNight.png";
import rainDay from "../images/rainDay.png";
import rainNight from "../images/rainNight.png";
import snowDay from "../images/snowDay.png";
import snowNight from "../images/snowNight.png";
import stormDay from "../images/stormDay.png";
import stormNight from "../images/stormNight.png";
import sunnyDay from "../images/sunnyDay.png";
import sunnyNight from "../images/sunnyNight.png";
import fogDay from "../images/fogDay.png";
import fogNight from "../images/fogNight.png";

import "./Weather.css";

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
      <img
        src={
          props.night ? props.weatherCond + "Night" : props.weatherCond + "Day"
        }
        alt="weather"
        className="weather__image"
      />
      <p className="weather__text">{`${props.temp}°F`}</p>
    </div>
  );
}

export default Weather;
