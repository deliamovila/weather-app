function WeatherCard({ weather }) {
  return (
    <div className="bg-white p-8 rounded-3xl shadow-xl w-[400px] text-center">

      <h2 className="text-3xl font-bold mb-4">
        {weather.name}
      </h2>

      <div className="mb-4">

        <p className="text-6xl font-bold text-blue-600">
          {Math.round(weather.main.temp)}°C
        </p>

        <p className="text-2xl text-gray-500 mt-2">
          {Math.round(weather.tempFahrenheit)}°F
        </p>

      </div>

      <p className="text-xl capitalize mb-4">
        {weather.weather[0].description}
      </p>

      <p className="bg-yellow-100 p-3 rounded-xl mb-5 font-semibold text-yellow-800">
        {weather.advice}
      </p>

      <div className="grid grid-cols-2 gap-4 text-lg">

        <div className="bg-blue-100 p-3 rounded-xl">
          💧 Humidity

          <p className="font-bold">
            {weather.main.humidity}%
          </p>
        </div>

        <div className="bg-blue-100 p-3 rounded-xl">
          🌬 Wind

          <p className="font-bold">
            {weather.wind.speed} m/s
          </p>
        </div>

      </div>

      <div className="mt-5 text-lg">

        <p className="mb-2">
          🌅 Sunrise:{" "}
          {new Date(weather.sys.sunrise * 1000).toLocaleTimeString()}
        </p>

        <p className="mb-2">
          🌇 Sunset:{" "}
          {new Date(weather.sys.sunset * 1000).toLocaleTimeString()}
        </p>

        <p>
          🧭 Wind Direction: {weather.windDirection}
        </p>

      </div>

    </div>
  );
}

export default WeatherCard;