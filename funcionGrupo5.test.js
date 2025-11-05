const { verificarStock } = require("./funcionGrupo5");

describe("Pruebas unitarias de verificarStock", () => {
  test("Debe calcular total correctamente si hay stock", () => {
    const productos = [
      { nombre: "Laptop", precio: 3000, cantidad: 1 },
      { nombre: "Mouse", precio: 100, cantidad: 2 },
    ];
    const resultado = verificarStock(productos, 10);
    expect(resultado).toBe(3000 * 1 + 100 * 2 - (10 / 100) * (3000 + 200));
  });

  test("Debe devolver error si algún producto tiene cantidad 0", () => {
    const productos = [
      { nombre: "Laptop", precio: 3000, cantidad: 0 },
    ];
    const resultado = verificarStock(productos, 10);
    expect(resultado).toBe("Error: hay productos sin stock");
  });
});