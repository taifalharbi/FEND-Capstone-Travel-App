import {
  fetchData,
  geonamesKey,
  geonamesUrl,
  pixabayKey,
  pixabayUrl,
  weatherbitKey,
  weatherbitUrl,
} from "./app";

// Event handler for form submission
const handleSubmit = async (event) => {
  event.preventDefault();

  const destination = document.getElementById("destination").value;
  const date = document.getElementById("date").value;

  const geonamesData = await fetchData(geonamesUrl, {
    q: destination,
    username: geonamesKey,
  });

  console.log(geonamesData);

  if (geonamesData && geonamesData.geonames?.length > 0) {
    const { lat, lng, countryCode } = geonamesData.geonames[0];
    console.log(lat, lng, countryCode);

    const weatherData = await fetchData(weatherbitUrl, {
      lat,
      lon: lng,
      country: countryCode,
      key: weatherbitKey,
    });

    const pixabayData = await fetchData(pixabayUrl, {
      q: destination,
      key: pixabayKey,
    });

    const imageData = pixabayData.hits[0].webformatURL;

    // Update UI with weather and image data
    updateUI({ date, weatherData, imageData });
  } else {
    console.log("Error: No geonames data found");
  }
};

// Update the UI with weather and image data
// Update the UI with weather and image data
// Update the UI with weather and image data
const updateUI = ({ date, weatherData, imageData }) => {
  const resultsDiv = document.getElementById("results");

  // Check if weather data is available
  if (weatherData && weatherData.data && weatherData.data.length > 0) {
    const { temp, weather } = weatherData.data[0];

    // Display weather information
    const weatherInfo = `
      <h2>Weather Information</h2>
      <p>Date: ${date}</p>
      <p>Temperature: ${temp}°C</p>
      <p>Weather Description: ${weather.description}</p>
    `;

    // Display image
    const image = `<img src="${imageData}" alt="Destination Image" style="max-width: 100%; height: auto;">`;

    resultsDiv.innerHTML = weatherInfo + image;
  } else {
    console.log("Error: No weather data found");
  }
};

export { handleSubmit };
