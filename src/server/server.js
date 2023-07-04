import cors from "cors";
import express from "express";
import fetch from "node-fetch";
import { config } from "dotenv";

export const app = express();
config();

const port = 3000;

// Enable CORS for localhost:6969
app.use(cors({ origin: "http://localhost:6969" }));

// Serve static files from the 'dist' directory
// app.use('dist');

app.get("/api/weather", async (req, res) => {
  try {
    const { location, date } = req.query;
    const geonamesUsername = process.env.GEONAMES_USERNAME;
    const geonamesUrl = `http://api.geonames.org/searchJSON?q=${location}&maxRows=1&username=${geonamesUsername}`;
    const geonamesResponse = await fetch(geonamesUrl);
    const geonamesData = await geonamesResponse.json();

    if (geonamesData.geonames && geonamesData.geonames.length > 0) {
      const { lat, lng } = geonamesData.geonames[0];
      const weatherUrl = `https://api.weatherbit.io/v2.0/forecast/daily?lat=${lat}&lon=${lng}&start_date=${date}&end_date=${date}&key=${process.env.WEATHERBIT_API_KEY}`;
      const weatherResponse = await fetch(weatherUrl);
      const weatherData = await weatherResponse.json();
      res.send(weatherData);
    } else {
      // Send a 404 status when location is not found
      res.status(404).send({ error: "Location not found" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "Failed to fetch weather data" });
  }
});

// Start the server
app.listen(port, "localhost", () => {
  console.log(`Server running on http://localhost:${port}`);
});
