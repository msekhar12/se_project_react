import Weather from "../Weather/Weather";
import "./Main.css";
import ItemContainer from "../ItemContainer/ItemContainer";
import ItemContainerHeading from "../ItemContainerHeading/ItemContainerHeading";

function Main(props) {
  console.log(`in main: ${props.weatherCond}`);
  return (
    <div className="main">
      <Weather
        temp={props.temp}
        tempClass={props.tempClass}
        weatherCond={props.weatherCond}
        night={props.night}
      />
      <ItemContainerHeading temp={props.temp} />
      <ItemContainer tempClass={props.tempClass} />
    </div>
  );
}

export default Main;
