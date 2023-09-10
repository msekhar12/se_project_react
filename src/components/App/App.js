import "./App.css";
import { useState, useEffect } from "react";
import { readWeatherData, getTempAndLocation } from "../../utils/weatherApi";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";
import FormModal from "../FormModal/FormModal";

function App() {
  const [tempData, setTempData] = useState({});
  const [garments, setGarments] = useState(false);

  useEffect(() => {
    readWeatherData()
      .then((data) => {
        const newData = getTempAndLocation(data);
        setTempData({
          ...tempData,
          temp: newData.temp,
          location: newData.location,
          tempClass: newData.tempClass,
          weatherCond: newData.weatherCond,
          night: newData.night,
        });
      })
      .catch((err) =>
        console.log(`Error occurred while getting weather data. ${err}`)
      );
  }, []);

  return (
    <div className="App">
      <Header
        location={tempData.location}
        handleAddGarmentsClick={() => setGarments(true)}
      />
      <Main
        temp={tempData.temp}
        tempClass={tempData.tempClass}
        weatherCond={tempData.weatherCond}
        night={tempData.night}
      />
      <Footer />

      {garments && (
        <FormModal
          name="new-garment"
          heading="New Garment"
          id="new-garment"
          handleCloseModalClick={() => setGarments(false)}
          onCloseModal={() => setGarments(false)}
        >
          <label className="form-modal__label">
            Name
            <input
              type="text"
              className="form-modal__text-input"
              placeholder="Name"
              required
              minLength="2"
              maxLength="40"
              id="new-garment-name"
              name="new-garment-name"
            />
            <span className="form-modal__line"></span>
            <span
              className="form-modal__input-error"
              id="new-garment-name-error"
            ></span>
          </label>
          <label className="form-modal__label">
            Image
            <input
              type="url"
              className="form-modal__text-input"
              placeholder="Image URL"
              required
              minLength="2"
              maxLength="40"
              id="new-garment-url1"
              name="new-garment-url"
            />
            <span className="form-modal__line"></span>
            <span
              className="form-modal__input-error"
              id="new-garment-url-error"
            ></span>
            <div className="form-modal__radio-block">
              <h3 className="form-modal__radio-block-heading">
                Select the weather type:
              </h3>

              <div className="form-modal__radio-block_input">
                <input type="radio" id="hot" name="weather" value="hot" />
                <label htmlFor="hot">Hot</label>
              </div>
              <div className="form-modal__radio-block_input">
                <input type="radio" id="warm" name="weather" value="warm" />
                <label htmlFor="warm">Warm</label>
              </div>

              <div className="form-modal__radio-block_input">
                <input type="radio" id="cold" name="weather" value="cold" />
                <label htmlFor="cold">Cold</label>
              </div>
            </div>
          </label>
        </FormModal>
      )}
    </div>
  );
}

export default App;
