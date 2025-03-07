const alphabet = 'abcdefghijklmnopqrstuvwxyz';
let string = "AlejandroGarcíaSerrano";
let positionArray = [];

function charPosition(string, arrayAlphabet, positionArray) {
    string.forEach(char => {
        arrayAlphabet.forEach(charAlpha => {
            if (char === charAlpha) positionArray.push(arrayAlphabet.indexOf(charAlpha));
        });
    });
    return positionArray;
}

function phraseLowerWithOutSpacesAndAcents(text) {
    let regex = /[\u0301]/g
    return text.toLowerCase().replaceAll(' ','').normalize('NFD').replace(regex,'');
}

// String without Caps and Acents
string = phraseLowerWithOutSpacesAndAcents(string);

// Array string and alphabet
let stringArray = string.split('');
let alphabetArray = alphabet.split('');
positionArray = charPosition(stringArray, alphabetArray, positionArray);
console.log(positionArray);
