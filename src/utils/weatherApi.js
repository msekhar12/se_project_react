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

function checkIfNight(timeZone, sunRise, sunSet) {
  // Get current time
  const currentTime = Date.now() + timeZone;
  // console.log(`currentTime human readable: ${new Date(currentTime)}`);
  // console.log(`currentTime: ${currentTime}`);
  return !(currentTime >= sunRise * 1000 && currentTime <= sunSet * 1000);
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

  const timeZone = weatherData.timezone;
  const sunRise = weatherData.sys.sunrise;
  const sunSet = weatherData.sys.sunset;
  const night = checkIfNight(timeZone, sunRise, sunSet);

  // console.log(`timeZone: ${timeZone}`);
  // console.log(`sunRise: ${sunRise}`);
  // console.log(`sunrise human readable: ${new Date(sunRise * 1000)}`);
  // console.log(`sunSet: ${sunSet}`);
  // console.log(`sunSet human readable: ${new Date(sunSet * 1000)}`);
  // console.log(`night: ${night}`);

  // const currentHour = new Date().getHours();
  // const start = Date.now();

  // console.log(`current time: ${start}`);

  // const night = currentHour < 6 && currentHour > 6;

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
