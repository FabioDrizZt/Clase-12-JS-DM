function sumaDeclarada (a = 0, b = 0, c = 0) {
  const resultado = a + b + c
  return resultado
}

const sumaExpresada = function (a, b) {
  const resultado = a + b
  return resultado
}

const sumaArrowMuliLinea = (a, b) => {
  const resultado = a + b
  return resultado
}

const sumaArrow = (a, b) => a + b

const saludarArrow = nombre => 'Hola ' + nombre

console.log(sumaDeclarada(2, 3, 6))
console.log(sumaExpresada(2, 3))
console.log(sumaArrowMuliLinea(2, 3))
console.log(sumaArrow(2, 3))

function saludar (nombre = 'visitante') {
  return 'Hola ' + nombre
}

console.log(saludar('Fabio'))
console.log(saludarArrow('Fabio'))
