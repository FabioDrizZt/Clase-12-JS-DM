// Cuando NO sepa exactamente las veces que voy a repetir depende del operador

let suma = 0
let cant = 0
let resp = false
do {
  const nota = window.prompt('ingrese una nota: ')
  cant++
  suma += Number(nota)
  resp = window.confirm('Desea seguir ingresando notas?')
} while (resp === true)
const promedio = suma / cant
document.write('La suma es: ' + suma)
document.write('<br>El promedio de notas es: ' + promedio)
