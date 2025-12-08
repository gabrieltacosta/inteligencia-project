"use client"

import Image from "next/image"

export interface WeatherInformationsProps {
  weather: {
    name: string;
    weather: { icon: string; description: string }[];
    main: { temp: number };
  };
}



function WeatherInformations({ weather }: WeatherInformationsProps) {
  return (
    <div className="flex flex-col justify-center items-center bg-zinc-500/30 rounded-lg p-3">
      <span className="text-lg lg:text-2xl font-bold">{weather.name}</span>
      <div className="flex justify-center items-center">
        <Image
          src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
          alt="Imagem do céu"
          width={50}
          height={50}
        />
        <p>{Math.round(weather.main.temp)}°C</p>
      </div>
      <p className="text-sm capitalize">{weather.weather[0].description}</p>
    </div>
  );
}

export default WeatherInformations;
