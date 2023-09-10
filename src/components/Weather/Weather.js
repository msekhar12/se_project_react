import React, { useState, useEffect } from "react";

import "./Weather.css";

function Weather({ night, weatherCond, temp }) {
  //const [weatherCSS, setWeatherCSS] = useState(undefined);

  // useEffect(() => {
  //   setWeatherCSS(
  //     `weather weather__${weatherCond}${night ? "-night" : "-day"}`
  //   );
  // }, [weatherCond, night]);

  return (
    <div
      className={`weather weather__${weatherCond}${night ? "-night" : "-day"}`}
    >
      <p className="weather__text">{`${temp}°F`}</p>
    </div>
  );
}

export default Weather;
