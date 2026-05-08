const getWeatherAdvice = require("./utils/weatherAdvice");
const celsiusToFahrenheit = require("./utils/temperatureUtils");
const getWindDirection = require("./utils/windDirection");

const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const axios = require("axios");

dotenv.config();

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.json({
    message: "Weather API works!"
  });
});

// Ruta meteo
app.get("/api/weather", async (req, res) => {
  try {

    const city = req.query.city;

    const apiKey = process.env.OPENWEATHER_API_KEY;

    const weatherUrl =
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    const response = await axios.get(weatherUrl);

    const weatherData = response.data;

    const advice = getWeatherAdvice(
      weatherData.main.temp,
      weatherData.weather[0].description.toLowerCase()
    );

    weatherData.advice = advice;

    weatherData.tempFahrenheit =
  celsiusToFahrenheit(weatherData.main.temp);

weatherData.windDirection =
  getWindDirection(weatherData.wind.deg);

    res.json(weatherData);

  } catch (error) {

    res.status(500).json({
      error: "Failed to fetch weather data"
    });

  }
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});