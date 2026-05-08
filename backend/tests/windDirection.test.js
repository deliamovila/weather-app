const getWindDirection = require("../utils/windDirection");

test("returns North", () => {

  expect(getWindDirection(0)).toBe("North");

});

test("returns East", () => {

  expect(getWindDirection(90)).toBe("East");

});

test("returns South", () => {

  expect(getWindDirection(180)).toBe("South");

});

test("returns West", () => {

  expect(getWindDirection(270)).toBe("West");

});