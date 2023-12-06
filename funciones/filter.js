const numeros = [1, 2, 3, 4, 5, 6]

const pares = numeros.filter(numeros => numeros % 2 === 0)
const impares = numeros.filter(numeros => numeros % 2 !== 0)
console.log({ pares })
console.log(impares)

// ----------------------------------------------

const productos = [
  { nombre: 'Camiseta', precio: 20 },
  { nombre: 'Pantalón', precio: 50 },
  { nombre: 'Zapatos', precio: 80 },
  { nombre: 'Sombrero', precio: 25 }
]

const baratos = productos.filter(producto => producto.precio < 30)
console.table(baratos)
