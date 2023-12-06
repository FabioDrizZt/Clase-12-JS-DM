const numeros = [2, 1, 3, 4, 5]

const suma = numeros.reduce((acumulador, numeros) => acumulador * numeros, 1)
console.log(suma) // 15

const ventas = [
  { producto: 'Camiseta', cantidad: 5, precio: 20 }, // 100
  { producto: 'Pantalón', cantidad: 2, precio: 50 }, // 100
  { producto: 'Zapatos', cantidad: 3, precio: 80 } // 240
]
// reduce para calcular el total de la compra
const totalVentas = ventas.reduce((acumulador, venta) => acumulador + venta.precio * venta.cantidad, 0)
console.log(totalVentas / ventas.length)
