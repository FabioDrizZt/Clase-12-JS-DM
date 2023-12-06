const arreglo = [0, 1, 2, 3, 4, 'seis', 'siete', 8, 9, 10]

// array.splice(índice, howmany, item1, ....., itemX)
/*
índice              La posición para añadir/eliminar elementos.
howmany             Número de elementos a eliminar.
item1, ..., itemX   Nuevo(s) elemento(s) a añadir. */
arreglo.splice(5, 2, 5, 6, 7)
arreglo.splice(0, 0, -1)
arreglo.splice(arreglo.length, 0, 11)
console.table(arreglo)
