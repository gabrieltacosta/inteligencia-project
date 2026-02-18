"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import WeatherInformations from "@/components/WeatherInformations";
import { Loader2 } from "lucide-react";

const Weather = () => {
  const [weather, setWeather] = useState();
  const [loading, setLoading] = useState(true);

  const city = "São Paulo";

  useEffect(() => {
    // 1. Função para buscar dados da nossa API interna
    const fetchWeather = async (lat: number, lon: number) => {
      try {
        const res = await axios.get(`/api/weather?lat=${lat}&lon=${lon}`);
        setWeather(res.data);
      } catch (err) {
        console.error("Erro ao carregar clima", err);
      } finally {
        setLoading(false);
      }
    };

    const fetchByCity = async (city: string) => {
      try {
        const res = await axios.get(`/api/weather?city=${city}`);
        setWeather(res.data);
      } catch (err) {
        console.error("Erro ao carregar clima", err);
      } finally {
        setLoading(false);
      }
    };

    // 2. Pedir permissão de localização ao navegador
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          fetchWeather(latitude, longitude);
        },
        (error) => {
          console.log("Usuário negou a localização", error);
          // Fallback: carregar cidade padrão
          fetchByCity(city);
        },
      );
    } else {
      console.log("Geolocalização não disponível no navegador.");
      // Fallback quando geolocalização não existe
      fetchByCity(city);
    }
  }, []);

  if (loading)
    return (
      <span>
        <Loader2 className="animate-spin text-[#FFFE03]" />
      </span>
    );
  if (!weather) return <span></span>;

  return <>{weather && <WeatherInformations weather={weather} />}</>;
};

export default Weather;
