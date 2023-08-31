import Weather from "../Weather/Weather";
import "./Main.css";
import ItemContainer from "../ItemContainer/ItemContainer";

function Main(props) {
  return (
    <div className="main">
      <Weather temp={props.temp} />
      <ItemContainer />
    </div>
  );
}

export default Main;
