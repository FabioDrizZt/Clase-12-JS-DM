const edadMinima = 12
const edadMaxima = 19

// Math.random => valores entre 0 y 0.999999999999
let edad = edadMinima + Math.random() * (edadMaxima - edadMinima)
edad = Math.round(edad)
// document.write('Edad: ' + edad)
document.write(`Edad: ${edad}`)
// if (edad >= 18) {
//   document.write('<br>Eres mayor de edad, puedes votar.')
// } else if (edad >= 16) {
//   document.write('<br>Eres menor de edad, puedes votar pero no es obligatorio.')
// } else /* if (edad < 16) no es necesario */ {
//   document.write('<br>Eres menor de edad, no puedes votar.')
// }

// if (edad < 16) {
//   document.write('<br>Eres menor de edad, no puedes votar.')
// } else if (edad < 18) {
//   document.write('<br>Eres menor de edad, puedes votar pero no es obligatorio.')
// } /* if (edad >= 18) no es necesario */ else {
//   document.write('<br>Eres mayor de edad, puedes votar.')
// }

const userDB = 'admin'
const passDB = '123456'
const user = window.prompt('ingrese usuario')
const pass = window.prompt('ingrese password')
if (user === userDB) {
  if (pass === passDB) {
    window.alert('bienvenido admin al sistema')
  } else {
    window.alert('contraseña incorrecta')
  }
} else {
  window.alert('Usuario incorrecto')
}

// --------------------------------
// -- Ternario
// --------------------------------

/*

(expresión) ? resultado1 : resultado2

La expresión ------ (expresión) ? resultado1 : resultado2 ----- evalúa a resultado1
si la expresión es TRUE, y result2 si la expresión es FALSE. */

// if (edad >= 18) {
//   document.write('<br>Eres mayor de edad, puedes votar.')
// } else if (edad >= 16) {
//   document.write('<br>Eres menor de edad, puedes votar pero no es obligatorio.')
// } else /* if (edad < 16) no es necesario */ {
//   document.write('<br>Eres menor de edad, no puedes votar.')
// }

/* document.write(
  `<br>Eres ${edad >= 18 ? 'mayor' : 'menor'} de edad, ${edad < 18 && 'NO'} puedes votar.`
) */

edad >= 18
  ? document.write('<br>Eres mayor de edad, puedes votar.')
  : edad >= 16
    ? document.write(
      '<br>Eres menor de edad, puedes votar pero no es obligatorio.'
    )
    : document.write('<br>Eres menor de edad, no puedes votar.')

const min = 0
const max = 10
let diaSemana = min + Math.random() * (max - min)
diaSemana = Math.round(`${diaSemana}`)
document.write('<br><br>dia de la semana: ')
document.write(diaSemana)

switch (diaSemana) {
  case 6:
    document.write('<br>sabado')
  case 7:
    document.write('<br>domingo')
  case 1:
    document.write('<br>lunes')
  case 2:
    document.write('<br>martes')
  case 3:
    document.write('<br>miercoles')
  case 4:
    document.write('<br>jueves')
  case 5:
    document.write('<br>viernes')
    break
  default:
    document.write('<br>dia de la semana invalido')
    break
}
