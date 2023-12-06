function hola () {
  const saludo = 'Hola que tal?'
  return saludo
}

function crearContador () {
  let contador = 0
  return function () {
    console.log(contador++)
  }
}

console.log(hola())
const contador1 = crearContador()
const contador2 = crearContador()
contador1()
contador1()
contador1()
contador2()
contador2()
contador2()
contador1()
contador1()
contador1()
contador2()
