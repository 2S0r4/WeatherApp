export async function getDaily(lon, lat) {
  const API_KEY = "fef57be889bf12758dce1433139bf0a5";
  const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`;

  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error("Failed to fetch forecast");

    const data = await res.json();

    const dailyForecast = {};
    data.list.forEach((item) => {
      const date = new Date(item.dt_txt);
      const day = date.toLocaleDateString("en-US", { weekday: "long" });
      const hour = date.getHours();

      if (hour === 12 && !dailyForecast[day]) {
        dailyForecast[day] = {
          weather: item.weather[0].main, // e.g., Cloudy
          temperature: `${Math.round(item.main.temp)}°`,
        };
      }
    });

    return dailyForecast;
  } catch (err) {
    console.error(err);
    return null;
  }
}
