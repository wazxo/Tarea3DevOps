const helloWorld = require("./holamundo");

test("¡Hola Mundo!", () => {
  expect(helloWorld()).toBe("¡Hola Mundo!");
});
