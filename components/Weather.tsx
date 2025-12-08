"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import WeatherInformations from "@/components/WeatherInformations";

const Weather = () => {
  const [weather, setWeather] = useState();

  const city = "sao paulo";
  const key = "e2af38232f7ba73e81d3843d8560e594";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`;

  useEffect(() => {
    async function searchCity() {
      try {
        const apiInfo = await axios.get(url);
        setWeather(apiInfo.data);
      } catch (error) {
        console.error("Erro ao buscar clima:", error);
      }
    }

    searchCity();
  }, [url]);

  return <>{weather && <WeatherInformations weather={weather} />}</>;
}

export default Weather;