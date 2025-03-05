const annio = prompt("Insert a year in YYYY format: ", 1980)
if (annio % 4 === 0 && (annio % 100 !== 0 || annio % 400 === 0)) {
    console.log( `Annio ${annio} is bisiest`)
} else {
    console.log( `Annio ${annio} isn't bisiest`)
}