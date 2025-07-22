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

  const todayForecast = {
    day: "Monday",
    date: "04 September",
    location: "Tangerang",
    temperature: "29°",
    weather: "cloudy",
    wind: "6.69 m/s",
    humidity: "70%",
    clouds: "40%",
    realFeel: "23°",
  };

  return (
    <main
      className={`font-grotesk text-white h-screen w-screen flex items-center justify-center overflow-hidden ${
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
              className="w-full placeholder:italic focus:outline-none"
            ></input>
            <span class="material-symbols-outlined">search</span>
          </div>
          <div className="w-full h-[2px] bg-white"></div>
        </section>
        <section className="w-full flex flex-col">
          <div className="flex gap-10 items-center py-[36px]">
            <div>
              <h2 className="font-bold">{`${todayForecast.day}`}</h2>
              <h2>{`${todayForecast.date}`}</h2>
            </div>
            <h1 className="text-[50px] font-bold">{`${todayForecast.location}`}</h1>
          </div>
          <div className="w-full h-[2px] bg-white"></div>
        </section>
        {/* WEATHER */}
        <section>
          <div className="flex gap-4 py-[36px]">
            <div>
              <h1 className="font-azeret text-[93px]">{`${todayForecast.temperature}`}</h1>
              <h2 className="text-[20px]">
                {todayForecast.weather === "cloudy"
                  ? "cloudy"
                  : todayForecast.weather === "rainy"
                  ? "rainy"
                  : "clear"}
              </h2>
            </div>
            <span
              style={{ fontSize: "140px" }}
              class="material-symbols-outlined"
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
          <ul className="flex w-full justify-between items-center">
            {/* WIND */}
            <li className="flex flex-col justify-center">
              <div className="flex items-center gap-5">
                <span
                  style={{ fontSize: "40px" }}
                  class="material-symbols-outlined"
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
                  class="material-symbols-outlined"
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
                  class="material-symbols-outlined"
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
                  class="material-symbols-outlined"
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
            <ul className="flex gap-5">
              {WForecast.map((forecast, index) => (
                <li
                  key={index}
                  className="bg-black/35 p-3 w-full flex flex-col gap-2"
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
