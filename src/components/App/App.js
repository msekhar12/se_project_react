// import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { readWeatherData, getTempAndLocation } from "../../utils/weatherApi";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";
// import ModalWithForm from "./ModalWithFormOld/ModalWithForm";
import Modal from "../Modal/Modal";

function App() {
  const [tempData, setTempData] = React.useState({});
  const [addGarments, setAddGarments] = React.useState(false);

  React.useEffect(() => {
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
      .catch();
  }, []);

  return (
    <div className="App">
      <Header
        location={tempData.location}
        handleAddGarmentsClick={() => setAddGarments(true)}
      />
      <Main
        temp={tempData.temp}
        tempClass={tempData.tempClass}
        weatherCond={tempData.weatherCond}
        night={tempData.night}
      />
      <Footer />

      {addGarments && (
        <Modal
          name="new-garment"
          heading="New Garment"
          id="new-garment"
          // visibility={addGarments}
          handleCloseModalClick={() => setAddGarments(false)}
          onCloseModal={() => setAddGarments(false)}
        >
          <label className="modal__label">
            Name
            <input
              type="text"
              className="modal__text-input"
              placeholder="Name"
              required
              minLength="2"
              maxLength="40"
              id="new-garment-name"
              name="new-garment-name"
            />
            <span className="modal__line"></span>
            <span
              className="modal__input-error"
              id="new-garment-name-error"
            ></span>
          </label>
          <label className="modal__label">
            Image
            <input
              type="url"
              className="modal__text-input"
              placeholder="Image URL"
              required
              minLength="2"
              maxLength="40"
              id="new-garment-url1"
              name="new-garment-url"
            />
            <span className="modal__line"></span>
            <span
              className="modal__input-error"
              id="new-garment-url-error"
            ></span>
            <div className="modal__radio-block">
              <h3 className="modal__radio-block-heading">
                Select the weather type:
              </h3>

              <div className="modal__radio-block_input">
                <input type="radio" id="hot" name="weather" value="hot" />
                <label htmlFor="hot">Hot</label>
              </div>
              <div className="modal__radio-block_input">
                <input type="radio" id="warm" name="weather" value="warm" />
                <label htmlFor="warm">Warm</label>
              </div>

              <div className="modal__radio-block_input">
                <input type="radio" id="cold" name="weather" value="cold" />
                <label htmlFor="cold">Cold</label>
              </div>
            </div>
          </label>
        </Modal>
      )}
    </div>
  );
}

export default App;
