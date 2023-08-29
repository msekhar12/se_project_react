import "./Weather.css";
import sunnyDay from "../images/Sunny_Day.png";

function Weather() {
  return (
    <div className="weather">
      <img src={sunnyDay} alt="weather" className="weather__image" />
      <p className="weather__text">75°F</p>
    </div>
  );
}

export default Weather;
