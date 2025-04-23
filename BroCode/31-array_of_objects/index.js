// ex 1

fruits = [
    {name: "apple", color: "red", calories: 95},
    {name: "banana", color: "green", calories: 75},
    {name: "coconut", color: "grey", calories: 35},
    {name: "dragon", color: "pink", calories: 105},
    {name: "orange", color: "orange", calories: 45},
];

console.log(fruits);

fruits.push({name: "mango", color: "yellow", calories: 109});
fruits.pop();
// fruits.splice(2, 3);
console.log(fruits[3].color);

fruits.forEach(fruit => console.log(fruit.name));
fruits.forEach(fruit => console.log(fruit.calories));

const fruitCalories = fruits.map(fruit => fruit.calories);
console.log(fruitCalories);

const highCalories = fruits.filter(fruit => fruit.calories > 50);
console.log(highCalories);

const maxCalory = fruits.reduce((max, fruit) => fruit.calories > max.calories ? fruit : max); // (prev, next) => 
console.log(maxCalory);