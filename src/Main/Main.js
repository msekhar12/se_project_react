import Weather from "../Weather/Weather";
import "./Main.css";
import ItemContainer from "../ItemContainer/ItemContainer";
import ItemContainerHeading from "../ItemContainerHeading/ItemContainerHeading";

function Main(props) {
  // console.log(`in main: ${props.tempClass}`);
  return (
    <div className="main">
      <Weather temp={props.temp} />
      <ItemContainerHeading temp={props.temp} />
      <ItemContainer tempClass={props.tempClass} />
    </div>
  );
}

export default Main;
