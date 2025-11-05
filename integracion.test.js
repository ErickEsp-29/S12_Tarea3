const { calcularTotalPedido } = require("./pedido");
const { verificarStock } = require("./funcionGrupo5");

describe("Prueba de integración entre calcularTotalPedido y verificarStock", () => {
  test("Flujo completo: calcula total y verifica stock correctamente", () => {
    const productos = [
      { nombre: "Monitor", precio: 800, cantidad: 2 },
      { nombre: "Teclado", precio: 200, cantidad: 1 },
    ];
    const descuento = 5;

    const totalPedido = calcularTotalPedido(productos, descuento);
    const totalVerificado = verificarStock(productos, descuento);

    expect(totalVerificado).toBe(totalPedido);
  });

  test("Debe fallar si hay producto sin stock", () => {
    const productos = [{ nombre: "Monitor", precio: 800, cantidad: 0 }];
    const descuento = 5;

    const resultado = verificarStock(productos, descuento);
    expect(resultado).toBe("Error: hay productos sin stock");
  });
});