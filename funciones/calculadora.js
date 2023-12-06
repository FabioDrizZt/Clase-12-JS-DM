/* function calculadora (a, b, operacion) {
  switch (operacion) {
    case 'suma':
      return a + b
    case 'resta':
      return a - b
    case 'multiplicacion':
      return a * b
    case 'division':
      return a / b
    default:
      return 'Operacion Invalida'
  }
}

const a = 6
const b = 5
console.log(calculadora(a, b, 'suma'))
console.log(calculadora(a, b, 'resta'))
console.log(calculadora(a, b, 'multiplicacion'))
console.log(calculadora(a, b, 'division'))
console.log(calculadora(a, b, 'raiz'))
*/

function calculadora (a, b, operacion) {
  if (typeof a === 'number' && typeof b === 'number') { return operacion(a, b) }
  return NaN
}

const suma = (a, b) => a + b
const resta = (a, b) => a - b
const multiplicacion = (a, b) => a * b
const division = (a, b) => {
  if (b !== 0) return a / b
  return NaN
}

const a = 6
const b = 5
console.log(calculadora(a, b, suma))
console.log(calculadora(a, b, (a, b) => a + b))
console.log(calculadora(a, b, resta))
console.log(calculadora(a, b, multiplicacion))
console.log(calculadora(a, b, division))
