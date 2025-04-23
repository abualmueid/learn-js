people = [
    {name: "Mueid", age: 30, gpa: 3.33},
    {name: "Masud", age: 40, gpa: 4.00},
    {name: "Rakib", age: 27, gpa: 3.50},
    {name: "Rasel", age: 37, gpa: 2.33},
    {name: "Sajjad", age: 33, gpa: 1.79},
];

people.sort((a, b) => a.age - b.age);
console.log(people);

people.sort((a, b) => a.name.localeCompare(b.name));
console.log(people);