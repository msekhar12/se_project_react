export const location = {
  // latitude: 41.85,
  // longitude: -87.65,
  // latitude: 32.779167,
  // longitude: -96.808891,
  //latitude: 63.5888,
  //longitude: 154.4931,
  //latitude: 17.38714,
  //longitude: 78.491684,
  latitude: 51.509865,
  longitude: -0.118092,
};

// Key to get data from https://openweathermap.org
export const weatherApiKey = "0afee0b2e41a4a98993e15ce04df856d";

//https://api.openweathermap.org/data/2.5/weather?lat=63.5888&lon=154.49311&units=imperial&appid=0afee0b2e41a4a98993e15ce04df856d

// Check if ID is 800.
// If not 800, get ID//100, and use that to find the weather condition
// If not found, use default 800 (clear)
export const weatherCodes = {
  800: "sunny",
  8: "cloudy",
  7: "fog",
  6: "snow",
  5: "rain",
  2: "storm",
  3: "rain",
};

export const defaultClothingItems = [
  {
    _id: 0,
    name: "Cap",
    weather: "hot",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Cap.png?etag=f3dad389b22909cafa73cff9f9a3d591",
  },
  {
    _id: 1,
    name: "Hoodie",
    weather: "warm",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Hoodie.png?etag=5f52451d0958ccb1016c78a45603a4e8",
  },
  {
    _id: 2,
    name: "Jacket",
    weather: "cold",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Jacket.png?etag=f4bb188deaa25ac84ce2338be2d404ad",
  },
  {
    _id: 3,
    name: "Sneakers",
    weather: "cold",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Sneakers.png?etag=3efeec41c1c78b8afe26859ca7fa7b6f",
  },
  {
    _id: 4,
    name: "T-Shirt",
    weather: "hot",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/T-Shirt.png?etag=44ed1963c44ab19cd2f5011522c5fc09",
  },
  {
    _id: 5,
    name: "Winter coat",
    weather: "cold",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Coat.png?etag=298717ed89d5e40b1954a1831ae0bdd4",
  },
];
