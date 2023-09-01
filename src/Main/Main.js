import Weather from "../Weather/Weather";
import "./Main.css";
import ItemContainer from "../ItemContainer/ItemContainer";
import ItemContainerHeading from "../ItemContainerHeading/ItemContainerHeading";

function Main(props) {
  return (
    <div className="main">
      <Weather temp={props.temp} />
      <ItemContainerHeading temp={props.temp} />
      <ItemContainer />
    </div>
  );
}

export default Main;
