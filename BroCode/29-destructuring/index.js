// example 1

let a = 10;
let b = 20;

[a, b] = [b, a];

console.log(a);
console.log(b);

// example 2

const colors = ["red", "green", "blue"];
[colors[0], colors[1]] = [colors[1], colors[0]];

console.log(colors);

// example 3

const colors2 = ["red", "green", "blue", "yellow", "purple"];
const [firstColor, secondColor, thirdColor, ...restColors] = colors2;

console.log(firstColor);
console.log(secondColor);
console.log(thirdColor);
console.log(restColors);

// example 4
const person = {
    name: "John",
    age: 30,
    city: "New York"
};

const { name, age, city = "Lubbock"} = person; 

console.log(name);
console.log(age);
console.log(city);

// example 5

const person2 = {
    name: "Mueid",
    age: 30,
    city: "Narayanganj",
    country: "Bangladesh"
};

displayPerson(person2);

function displayPerson({ name, age, city }) {
    console.log(name);
    console.log(age);
    console.log(city);
}