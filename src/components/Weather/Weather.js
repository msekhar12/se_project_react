import React, { useState, useEffect } from "react";

import "./Weather.css";

function Weather(props) {
  const [weatherCSS, setWeatherCSS] = useState(undefined);

  useEffect(() => {
    setWeatherCSS(
      `weather weather__${props.weatherCond}${props.night ? "-night" : "-day"}`
    );
  }, [props.weatherCond, props.night]);

  return (
    <div className={weatherCSS}>
      <p className="weather__text">{`${props.temp}°F`}</p>
    </div>
  );
}

export default Weather;
