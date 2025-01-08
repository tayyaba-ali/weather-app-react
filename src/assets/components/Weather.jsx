import React, { useState, useRef } from "react";
import axios from "axios";
import WeatherCard from "./WeatherCard";

const Weather = () => {
  //   const [cityName, setCityName] = useState("");
  const userCityRef = useRef(null);
  const [weather, setWeather] = useState([]);

  const getCityName = async (event) => {
    event.preventDefault();
    // let userCity = document.getElementById("userCity");
    // console.log(userCity.value);
    let cityName = userCityRef.current.value;
    let APIkey = "18196adb736a0ff23b9fa214ca394629";
    try {
      let response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APIkey}&units=metric`
      );

      setWeather([response.data, ...weather]);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <form>
        <label htmlFor="userCity"></label>
        {/* not recommended */}
        {/* <input type="text" id="userCity" /> */}
        {/* not recommended */}
        {/* <input
        type="text"
        id="userCity"
        onChange={(e) => {
          setCityName(e.target.value);
          console.log(cityName);
        }}
      /> */}

        {/* recommended */}
        <input type="text" id="userCity" ref={userCityRef} />
        <button onClick={getCityName}>Get Weather</button>
      </form>
      {console.log(weather)}
      {weather.length ? <WeatherCard weather={weather} /> : "data not found"}
    </>
  );
};

export default Weather;
