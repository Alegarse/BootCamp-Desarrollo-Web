// Ejercicio 4.3
function getRandomNumber() {
    return Math.round(Math.random() * 100)
}

function getRandomArray(num) {
    let arrayNumbers = [];
    for (let i = 1; i <= num; i++) {
        const randomNumber = getRandomNumber();
        arrayNumbers.push(randomNumber);
    }
    return arrayNumbers;
}

function isEven(number) {
    if (number % 2 === 0) return true;
}

let numbers = getRandomArray(30);

console.log(numbers);

const evenNumbers = numbers.filter(isEven);

console.log(evenNumbers);

// Ejercicio 4.4
let nums = getRandomArray(8);
let newNums = nums.map(num => num * 2);
console.log(nums);
console.log(newNums);

// Ejercicio 4.5
let arrayNums = getRandomArray(8);
console.log(arrayNums);
console.log(arrayNums.find((element) => element > 3));