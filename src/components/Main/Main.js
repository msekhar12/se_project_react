import Weather from "../Weather/Weather";
import "./Main.css";
import ItemsContainer from "../ItemsContainer/ItemsContainer";
import WeatherCard from "../WeatherCard/WeatherCard";

function Main({ temp, tempClass, weatherCond, night }) {
  return (
    <div className="main">
      <Weather
        temp={temp}
        tempClass={tempClass}
        weatherCond={weatherCond}
        night={night}
      />
      <WeatherCard temp={temp} />
      <ItemsContainer tempClass={tempClass} />
    </div>
  );
}

export default Main;
