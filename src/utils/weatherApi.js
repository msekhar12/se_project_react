import { weatherApiKey, location, weatherCodes } from "./constants";

//https://api.openweathermap.org/data/2.5/weather?lat=41.8500&lon=-87.6501&units=imperial&appid=0afee0b2e41a4a98993e15ce04df856d

function readWeatherData() {
  const lat = location.latitude;
  const long = location.longitude;
  const requestUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=imperial&appid=${weatherApiKey}`;
  const weatherData = fetch(requestUrl)
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
    })
    .catch((err) =>
      console.log(`Error occurred while getting weather data. Error: ${err}`)
    );
  return weatherData;
}

function getTempAndLocation(weatherData) {
  const temp = weatherData.main.temp;
  const location = weatherData.name;
  let weatherCond = "sunny";
  if (weatherData.weather[0].id != undefined) {
    if (parseInt(weatherData.weather[0].id) == 800) {
      weatherCond = "sunny";
    } else {
      const code = Math.floor(parseInt(weatherData.weather[0].id) / 100);

      if (weatherCodes[code] != undefined) {
        weatherCond = weatherCodes[code];
      }
    }
  }
  console.log(`weatherCond: ${weatherCond}`);

  const currentHour = new Date().getHours();

  const night = currentHour < 6 && currentHour > 6;

  let tempClass = undefined;

  if (temp >= 86) {
    tempClass = "hot";
  } else if (temp >= 66 && temp <= 85) {
    tempClass = "warm";
  } else if (temp <= 65) {
    tempClass = "cold";
  }

  return { temp, location, tempClass, weatherCond, night };
}

export { readWeatherData, getTempAndLocation };
