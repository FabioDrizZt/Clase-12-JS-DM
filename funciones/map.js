const numeros = [1, 2, 3, 4, 5, 6]

const dobles = numeros.map(n => n * 2)
const triples = numeros.map(n => n * 3)

console.table(dobles)
console.table(triples)

const nombres = ['Juan', 'Maria', 'Carlos']
const nombresConSaludo = nombres.map((nombre) => `Hola ${nombre} `)

console.table(nombresConSaludo)
/*
<ul>
nombres.map((nombre) =>
<li>`Hola ${nombre} `</li>)
</ul>
*/
