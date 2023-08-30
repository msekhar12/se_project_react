import Weather from "../Weather/Weather";
import "./Main.css";

function Main(props) {
  return (
    <div className="main">
      <Weather temp={props.temp} />
    </div>
  );
}

export default Main;
