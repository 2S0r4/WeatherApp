export async function getWeather(city) {
  const API_KEY = "fef57be889bf12758dce1433139bf0a5";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error("Failed to fetch weather");
    return await res.json();
  } catch (err) {
    console.error(err);
    return null;
  }
}
