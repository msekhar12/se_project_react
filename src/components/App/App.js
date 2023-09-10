import "./App.css";
import { useState, useEffect } from "react";
import { readWeatherData, getTempAndLocation } from "../../utils/weatherApi";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function App() {
  const [tempData, setTempData] = useState({});
  //const [garments, setGarments] = useState(false);
  const [activeModal, setActiveModal] = useState("");

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
        handleAddGarmentsClick={() => setActiveModal("new-garment")}
      />
      <Main
        temp={tempData.temp}
        tempClass={tempData.tempClass}
        weatherCond={tempData.weatherCond}
        night={tempData.night}
      />
      <Footer />

      {activeModal === "new-garment" && (
        <ModalWithForm
          name="new-garment"
          heading="New Garment"
          id="new-garment"
          handleCloseModalClick={() => setActiveModal("")}
        >
          <label className="modal-with-form__label">
            Name
            <input
              type="text"
              className="modal-with-form__text-input"
              placeholder="Name"
              required
              minLength="2"
              maxLength="40"
              id="new-garment-name"
              name="new-garment-name"
            />
            <span className="modal-with-form__line"></span>
            <span
              className="modal-with-form__input-error"
              id="new-garment-name-error"
            ></span>
          </label>
          <label className="modal-with-form__label">
            Image
            <input
              type="url"
              className="modal-with-form__text-input"
              placeholder="Image URL"
              required
              minLength="2"
              maxLength="40"
              id="new-garment-url1"
              name="new-garment-url"
            />
            <span className="modal-with-form__line"></span>
            <span
              className="modal-with-form__input-error"
              id="new-garment-url-error"
            ></span>
            <div className="modal-with-form__radio-block">
              <h3 className="modal-with-form__radio-block-heading">
                Select the weather type:
              </h3>

              <div className="modal-with-form__radio-block_input">
                <input type="radio" id="hot" name="weather" value="hot" />
                <label htmlFor="hot">Hot</label>
              </div>
              <div className="modal-with-form__radio-block_input">
                <input type="radio" id="warm" name="weather" value="warm" />
                <label htmlFor="warm">Warm</label>
              </div>

              <div className="modal-with-form__radio-block_input">
                <input type="radio" id="cold" name="weather" value="cold" />
                <label htmlFor="cold">Cold</label>
              </div>
            </div>
          </label>
        </ModalWithForm>
      )}
    </div>
  );
}

export default App;
