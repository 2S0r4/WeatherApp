"use client";
import { useState, useEffect } from "react";
import { getWeather } from "./lib/APIcall";

export default function Pages() {
  const WForecast = [
    {
      day: "Tuesday",
      weather: "Cloudy",
      temperature: "26°",
    },
    {
      day: "Wednesday",
      weather: "Rainy",
      temperature: "14°",
    },
    {
      day: "Thursday",
      weather: "Cloudy",
      temperature: "25°",
    },
    {
      day: "Friday",
      weather: "Clear",
      temperature: "32°",
    },
    {
      day: "Saturday",
      weather: "Cloudy",
      temperature: "22°",
    },
  ];

  function getWeatherCategory(id) {
    if (id === 800) {
      return "clear";
    }

    if (id >= 801 && id <= 804) {
      return "cloudy";
    }

    if (
      (id >= 200 && id < 300) ||
      (id >= 300 && id < 400) ||
      (id >= 500 && id < 600)
    ) {
      return "rainy";
    }

    if (id >= 600 && id < 700) {
      return "snowy";
    }

    return "cloudy";
  }

  const [todayForecast, setTodayForecast] = useState({
    day: "--",
    date: "--",
    location: "--",
    temperature: "--°",
    weather: "cloudy",
    wind: "-- m/s",
    humidity: "--%",
    clouds: "--%",
    realFeel: "--°",
  });

  const [Temcity, setTemCity] = useState("Jakarta");

  useEffect(() => {
    const fetchWeather = async () => {
      const city = Temcity;
      const data = await getWeather(city);
      if (data) {
        setTodayForecast({
          location: data.name,
          day: new Date(data.dt * 1000).toLocaleDateString("en-US", {
            weekday: "long",
          }),
          date: new Date(data.dt * 1000).toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
          }),
          temperature: `${Math.round(data.main.temp)}°`,
          weather: getWeatherCategory(data.weather[0].id),
          wind: `${data.wind.speed} m/s`,
          humidity: `${data.main.humidity}%`,
          clouds: `${data.clouds.all}%`,
          realFeel: `${Math.round(data.main.feels_like)}°`,
        });
        setWeather(todayForecast.weather);
      }
    };
    fetchWeather();
  }, [Temcity]);

  function handleCityChange(event) {
    console.log(Temcity);
    setTemCity(event.target.value);
  }

  return (
    <main
      className={`font-grotesk text-white h-screen w-screen flex items-center justify-center overflow-hidden px-4 transition-colors ease-in-out duration-1000 ${
        todayForecast.weather === "cloudy"
          ? "cloudy"
          : todayForecast.weather === "rainy"
          ? "rainy"
          : "clear"
      }`}
    >
      <link
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
        rel="stylesheet"
      />
      <div className="max-w-[600px] w-full h-screen flex flex-col justify-center">
        <section className="w-full flex flex-col gap-3">
          <div className="w-full flex gap-2">
            <input
              type="text"
              placeholder="Insert your city name..."
              className="w-full font-bold placeholder:italic placeholder:font-normal placeholder:font-azeret focus:outline-none"
              onInput={handleCityChange}
              id="cityInput"
            ></input>
            <span
              className="material-symbols-outlined cursor-pointer"
              onClick={() =>
                setCity(document.getElementById("cityInput").value)
              }
            >
              search
            </span>
          </div>
          <div className="w-full h-[2px] bg-white"></div>
        </section>
        <section className="w-full flex flex-col">
          <div className="flex gap-10 items-center py-[36px]">
            <div>
              <h2 className="font-bold">{`${todayForecast.day}`}</h2>
              <h2>{`${todayForecast.date}`}</h2>
            </div>
            <h1 className="md:text-[50px] text-[40px] font-bold">{`${todayForecast.location}`}</h1>
          </div>
          <div className="w-full h-[2px] bg-white"></div>
        </section>
        {/* WEATHER */}
        <section>
          <div className="flex gap-4 py-[36px]">
            <div>
              <h1 className="font-azeret text-[93px]">{`${todayForecast.temperature}`}</h1>
              <h2 className="text-[20px]">{todayForecast.weather}</h2>
            </div>
            <span
              style={{ fontSize: "140px" }}
              className="material-symbols-outlined"
            >
              {todayForecast.weather === "rainy"
                ? "rainy"
                : todayForecast.weather === "cloudy"
                ? "filter_drama"
                : "wb_sunny"}
            </span>
          </div>
          <div className="w-full h-[2px] bg-white"></div>
        </section>
        <section className="flex flex-col justify-between gap-10 py-[36px]">
          <ul className="md:flex grid grid-cols-2 w-full justify-between items-center">
            {/* WIND */}
            <li className="flex flex-col justify-center">
              <div className="flex items-center gap-5">
                <span
                  style={{ fontSize: "40px" }}
                  className="material-symbols-outlined"
                >
                  air
                </span>
                <h3 className="text-[ 0px] font-medium">{`${todayForecast.wind}`}</h3>
              </div>
              <h1 className="font-azeret text-[13px] opacity-75">Wind</h1>
            </li>
            {/* HUMIDITY */}
            <li className="flex flex-col justify-center">
              <div className="flex items-center gap-5">
                <span
                  style={{ fontSize: "40px" }}
                  className="material-symbols-outlined"
                >
                  humidity_low
                </span>
                <h3 className="text-[ 0px] font-medium">{`${todayForecast.humidity}`}</h3>
              </div>
              <h1 className="font-azeret text-[13px] opacity-75">Humidity</h1>
            </li>
            {/* CLOUD */}
            <li className="flex flex-col justify-center">
              <div className="flex items-center gap-5">
                <span
                  style={{ fontSize: "40px" }}
                  className="material-symbols-outlined"
                >
                  cloud
                </span>
                <h3 className="text-[ 0px] font-medium">{`${todayForecast.clouds}`}</h3>
              </div>
              <h1 className="font-azeret text-[13px] opacity-75">Clouds</h1>
            </li>
            {/* REAL FEEL */}
            <li className="flex flex-col justify-center">
              <div className="flex items-center gap-5">
                <span
                  style={{ fontSize: "40px" }}
                  className="material-symbols-outlined"
                >
                  device_thermostat
                </span>
                <h3 className="text-[ 0px] font-medium">{`${todayForecast.realFeel}`}</h3>
              </div>
              <h1 className="font-azeret text-[13px] opacity-75">Real Feel</h1>
            </li>
          </ul>
          <div className="flex flex-col gap-5">
            <h1 className="font-azeret opacity-75">Weekly Forecast</h1>
            <ul className="flex gap-5 overflow-x-scroll">
              {WForecast.map((forecast, index) => (
                <li
                  key={index}
                  className="bg-black/35 min-w-[116px] md:min-w-[180px] p-3 w-full flex flex-col gap-2"
                >
                  <h1>{forecast.day}</h1>
                  <div className="flex items-center gap-1">
                    <span
                      style={{ fontSize: "28px" }}
                      className="material-symbols-outlined"
                    >
                      {forecast.weather === "Rainy"
                        ? "rainy"
                        : forecast.weather === "Cloudy"
                        ? "filter_drama"
                        : "wb_sunny"}
                    </span>
                    <h3>{forecast.temperature}</h3>
                  </div>
                  <h2>{forecast.weather}</h2>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
}
