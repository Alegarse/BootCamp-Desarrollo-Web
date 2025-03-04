console.log("Ejercicio 4. Verificar si un año es bisiesto:")
const annio = prompt("Inserte un año en formato YYYY:", 1980)
if (annio % 4 === 0 && (annio % 100 !== 0 || annio % 400 === 0)) {
    console.log( `El año ${annio} es bisiesto`)
} else {
    console.log( `El año ${annio} no es bisiesto`)
}