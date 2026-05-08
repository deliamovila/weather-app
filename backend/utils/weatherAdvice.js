function getWeatherAdvice(temp, weather) {

  if (temp <= 5) {
    return "It is very cold. Wear a thick jacket!";
  }

  if (temp > 5 && temp <= 15) {
    return "It is chilly. Wear a hoodie or jacket.";
  }

  if (temp > 15 && temp <= 25) {
    return "Nice weather. Light clothes are fine.";
  }

  if (temp > 25) {
    return "It is hot outside. Wear light clothes and stay hydrated!";
  }

  if (weather.includes("rain")) {
    return "Take an umbrella!";
  }

  return "Have a nice day!";
}

module.exports = getWeatherAdvice;