const { calcularTotalPedido } = require("./pedido");

function verificarStock(productos, descuento) {
  // Validar que ningún producto tenga cantidad 0
  const sinStock = productos.some(p => p.cantidad === 0);
  if (sinStock) return "Error: hay productos sin stock";

  // Si todo está bien, calcular total
  const total = calcularTotalPedido(productos, descuento);
  return total;
}

module.exports = { verificarStock };