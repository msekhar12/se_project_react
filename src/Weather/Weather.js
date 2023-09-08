import React, { useState, useEffect } from "react";
// import cloudyDay from "../images/cloudyDay.png";
// import cloudyNight from "../images/cloudyNight.png";
// import rainDay from "../images/rainDay.png";
// import rainNight from "../images/rainNight.png";
// import snowDay from "../images/snowDay.png";
// import snowNight from "../images/snowNight.png";
// import stormDay from "../images/stormDay.png";
// import stormNight from "../images/stormNight.png";
// import sunnyDay from "../images/sunnyDay.png";
// import sunnyNight from "../images/sunnyNight.png";
// import fogDay from "../images/fogDay.png";
// import fogNight from "../images/fogNight.png";

import "./Weather.css";

//import { readWeatherData } from "../utils/weatherApi";

function Weather(props) {
  const [weatherCSS, setWeatherCSS] = useState(undefined);

  useEffect(() => {
    setWeatherCSS(
      "weather weather__" +
        props.weatherCond +
        (props.night ? "-night" : "-day")
    );
  }, [props.weatherCond, props.night]);

  console.log(`In weather props.weatherCond: ${props.weatherCond}`);
  console.log(`In weather props.night: ${props.night}`);

  return (
    <div className={weatherCSS}>
      <p className="weather__text">{`${props.temp}°F`}</p>
    </div>
  );
}

export default Weather;
