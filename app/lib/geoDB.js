export async function getLoc(location) {
  const url = `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?minPopulation=1000&namePrefix=${location}`;
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "5433afadbamsh3474f10e05c9695p128f35jsn48bf893d9f1e",
      "x-rapidapi-host": "wft-geo-db.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    if (!response.ok) throw new Error("Failed to fetch location data");
    const data = await response.json();
    return await data;
  } catch (error) {
    console.error(error);
  }
}
