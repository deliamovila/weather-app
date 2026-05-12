import { useState } from "react";
import axios from "axios";
import WeatherCard from "./components/WeatherCard";

function App() {

  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const getWeather = async () => {

    try {

      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/weather?city=${city}`
      );

      setWeather(response.data);

      setError("");

    } catch (error) {

      setError("City not found!");

      setWeather(null);
    }
  };

  return (
    <div className="min-h-screen bg-blue-100 flex flex-col items-center justify-center p-6">

      <h1 className="text-5xl font-bold text-blue-700 mb-10">
        Weather App
      </h1>

      <div className="flex gap-4 mb-6">

        <input
          type="text"
          placeholder="Enter city..."
          className="p-4 rounded-xl text-lg w-[300px] bg-white shadow"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />

        <button
          onClick={getWeather}
          className="bg-red-600 text-white px-6 py-4 rounded-xl text-lg font-bold hover:bg-red-700 transition"
        >
          Search
        </button>

      </div>

      {error && (
        <p className="text-red-600 font-bold mb-6">
          {error}
        </p>
      )}

      {weather && (
        <WeatherCard weather={weather} />
      )}

    </div>
  );
}

export default App;