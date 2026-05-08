const getWeatherAdvice = require("../utils/weatherAdvice");

test("returns hot weather advice", () => {

  const result = getWeatherAdvice(30, "clear sky");

  expect(result).toBe(
    "It is hot outside. Wear light clothes and stay hydrated!"
  );

});

test("returns cold weather advice", () => {

  const result = getWeatherAdvice(0, "snow");

  expect(result).toBe(
    "It is very cold. Wear a thick jacket!"
  );

});