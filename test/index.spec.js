const mdLinks = require("../src/index.js");
const chalk = require("chalk");

const path = "test/test-pruebas";
const rutaInvalida = "test/test-prueb";
const archivoSinLinks = "test/test-pruebas/prueba-test-2.md";

const linksArrayValidados = [
  {
    href: "https://www.youtube.com/",
    text: "Youtube",
    file: "D:\\Proyectos-Laboratoria\\BOG004-md-links\\test\\test-pruebas\\prueba-test.md",
    status: 200,
    ok: "OK",
  },
  {
    href: "https://gith.com/Lina-1985-cloud/BOG004-md-links",
    text: "GitHub",
    file: "D:\\Proyectos-Laboratoria\\BOG004-md-links\\test\\test-pruebas\\prueba-test.md",
    status: 404,
    ok: "fail",
  },
];

describe("mdLinks", () => {
  it("should be a function", () => {
    expect(typeof mdLinks).toBe("function");
  });
  it("Debe retornar una promesa", () => {
    expect(mdLinks(path) instanceof Promise).toBeTruthy();
  });
  it("Debe retornar array de objetos de links validos", () =>
    mdLinks(path, { validate: true }).then((e) =>
      expect(e).toEqual(linksArrayValidados)
    ));
  it("Debe retornar un mensaje de error si la rura no es válida", async () => {
    try {
      return await mdLinks(rutaInvalida, { validate: true });
    } catch (e) {
      return expect(e).toMatch(
        chalk.redBright("🚨  • La ruta ingresada no es válida 😕  • 🚨")
      );
    }
  });
  it("Debe retornar mensaje de que el archivo no contiene links", () => {
    mdLinks(archivoSinLinks).catch((e) => {
      expect(e).toMatch('🚨  • El archivo no contiene Links • 🚨 🧐')
    });
  });
});
