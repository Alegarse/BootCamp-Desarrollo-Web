console.log("Ejercicio 5. Imprimir una tabla de multiplicar:")
const number = prompt("Inserte un número para obtener su tabal de multiplicar:", 7)
console.log(`Tabla de multiplicar del ${number}`)
for (let i = 1; i <= 10; i++) {
    console.log (`${number} x ${i} = ${number*i}`)
}