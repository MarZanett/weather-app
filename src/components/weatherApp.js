import { useState, useEffect } from "react";
import WeatherForm from "./weatherForm";
import WeatherInfo from "./weatherMainInfo";
import styles from "./weatherApp.module.css";
import Spiner from "./spiner";
const axios = require("axios");

export default function WeatherApp() {
  const [weather, setWeather] = useState(null);
  useEffect(() => {
    loadInfo();
  }, []);

  useEffect(() => {
    document.title = `Weather | ${weather?.data.location.name ?? ""} `;
  }, [weather]);


  async function loadInfo(city = "la plata") {
    try {
      const request = await axios.get(
        `${process.env.REACT_APP_URL}&key=${process.env.REACT_APP_KEY}&q=${city}`,
        {}
      );
setTimeout(() =>{

  setWeather(request);
},1000)
    } catch (error) {
      console.log(error);
    }
  }

  function handleChangeCity(city) {
    setWeather(null);
    loadInfo(city);
  }

  return (
    <div className={styles.weatherContainer}>
      <WeatherForm onChangeCity={handleChangeCity} />
      {weather ? <WeatherInfo weather={weather} /> : <Spiner/>}
      
    </div>
  );
}
