import axios from 'axios';

const API_KEY = '1b34df560c8322f35b55e29729f0c3e8';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;  //ES6 with variable string, note backticks


export const FETCH_WEATHER = "FETCH_WEATHER";

export function fetchWeather(city) {

  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);

  console.log('Request: ', request);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
