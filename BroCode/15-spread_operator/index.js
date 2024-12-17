let numbers = [1, 2, 3, 4, 5];
let max = Math.max(...numbers);
let min = Math.min(...numbers);

console.log(max);
console.log(min);

let fruits = ["apple", "banana", "orange"];
let vegetables = ["cucumber", "tomato", "potato"];
let foods = [...fruits, ...vegetables, "letus", "eggs"];

console.log(foods);

let myName = "mueid";
let letters = [...myName];
console.log(letters);
console.log(letters.join('-'));