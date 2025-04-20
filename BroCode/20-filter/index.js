numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

evenNums = numbers.filter(isEven);
oddNums = numbers.filter(isOdd);
console.log(evenNums);
console.log(oddNums);

function isEven(element) {
    return element % 2 === 0;
}

function isOdd(element) {
    return element % 2 !== 0;
}

// another example

words = ["Dhaka", "Chittagong", "Rajshahi", "Sylhet", "Barisal"];

shortWords = words.filter(shortWords);
longWords = words.filter(longWords);

console.log(shortWords);
console.log(longWords);

function shortWords(element) {
    return element.length <= 6;
}

function longWords(element) {
    return element.length >= 6;
}