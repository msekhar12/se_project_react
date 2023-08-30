// import logo from "./logo.svg";
//import "./App.css";
import React from "react";
import { readWeatherData, getTempAndLocation } from "./utils/weatherApi";
import Header from "./Header/Header";
import Main from "./Main/Main";

function App() {
  const [tempData, setTempData] = React.useState({});

  React.useEffect(() => {
    readWeatherData()
      .then((data) => {
        const newData = getTempAndLocation(data);
        setTempData({
          ...tempData,
          temp: newData.temp,
          location: newData.location,
        });
      })
      .catch();
  }, []);

  return (
    <div className="App">
      <Header location={tempData.location} />
      <Main temp={tempData.temp} />
    </div>
  );
}

export default App;
