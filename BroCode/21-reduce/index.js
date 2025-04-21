// example 1

const prices = [10, 20, 35, 45, 60];

const totalPrice = prices.reduce(sum);
console.log(`$${totalPrice.toFixed(2)}`);

function sum(previous, next) {
    return previous + next;
}

// example 2

let grades = [30, 40, 50, 60, 70];

let lowestGrade = grades.reduce(findLowestGrade);
let highestGrade = grades.reduce(findHighestGrade);

console.log(lowestGrade);
console.log(highestGrade);

function findLowestGrade(prev, next) {
    return Math.min(prev, next);
}

function findHighestGrade(prev, next) {
    return Math.max(prev, next);
}
