let fruits = ["Mango", "Banana", "Apple"];

console.log(fruits.length);

fruits.push("Coconut");
fruits.pop("Coconut");
// fruits.shift("Mango");
fruits.unshift("Jackfruit");

for(let fruit of fruits) {
    console.log(fruit);
} 

