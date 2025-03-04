console.log("Ejercicio 3.1. Detectar si una palabra o frase es un palíndromo")
//const phrase = prompt("Introduzca una palabra o frase para verificar si es palíndromo", "Dábale arroz a la zorra el abad")
const phrase = "Dábale arroz a la zorra el abad"
let string1 = '';
let string2 = '';

function phraseLowerWithOutSpacesAndAcents(text) {
    /**
     * ================================================================================================================
     * PATRON REGEX
     * ================================================================================================================
     * Es un patron así llamado apra búsquedas
     * Siempre empieza por /
     * Lo que queramos buscar va entre []
     * Iniciamos patron de búsqueda con \ y después lo que queramos buscar, en este caso u para buscar carácter unicode
     * Caracteres Unicode: https://symbl.cc/es/unicode-table/#combining-diacritical-marks
     * Sintaxis expresiones: https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_expressions/Cheatsheet
     * Por defecto solo busca primera coincidencia, para buscar todas se pone despues de los corchetes /g
     * ================================================================================================================
     * ================================================================================================================
     */
    let regex = /[\u0301]/g
    /**
     * Explicación del patrón entre corchetes []:
     * u de caracter unicode
     * 0301 es el caracter unicode del acento agudo
     * Para buscar un rango ponemos - en medio
     * Ej: \u0301-\u0304
     */
    return text.toLowerCase().replaceAll(' ','').normalize('NFD').replace(regex,'');
    /**
     * Explicación de normalize
     * Si ponemos que sea de tipo NFD, subdivide los caracteres entre la letra y su agregado, en este caso el acento
     * Están ambos, aunque el console.log no los muestre
     */
}

function deleteCentralChar(string,length) {
    let centralIndex = parseInt(length/2)
    if(length % 2 !== 0){
        //Desde inicio a posicion central y desde posicion central más 1 hasta el final
        return string.substring(0,centralIndex) + string.substring(centralIndex + 1)
    }
    // Al no ser impar el tamaño lo devuelvo tal cual
    return string
}

function splitPhrase(string) {
    let position = string.length/2
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring
    string1 = string.substring(0, position) //Desde el índice 0 hasta la posicion central
    string2 = string.substring(position) //Desde la posición central hasta el final
    return
}

function reverseString(string) {
    /**
     * Explicación de la funciones
     * split('') - Divide el string en un array con cada uno de sus caracteres segun el patron '', de forma que coge caracteres unoa a uno
     * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
     * reverse() - Invieto el orden del array
     * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse
     * join('') - Vuelvo a unir el array de caracteres en un string
     * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
     */
    return string.split('').reverse().join('')
}

function checkPalindrom(string1, string2) {
    if (string1 === string2) {
        console.log(`"${phrase}" es un palíndromo`)
    } else {
        console.log(`"${phrase}" no es un palíndromo`)
    }
    return
}
    
// Frase en minúsculas, sin espacios y sin acentos
let phraseModified = phraseLowerWithOutSpacesAndAcents(phrase)

// Frase con caracter central eliminado en caso de ser necesario
let phraseEvenCharacters = deleteCentralChar(phraseModified, phraseModified.length)

// Dividimos en dos strings separados
splitPhrase(phraseEvenCharacters)

// Volteamos el segundo
string2 = reverseString(string2)

// Verificamos si es un palíndromo
checkPalindrom(string1, string2)