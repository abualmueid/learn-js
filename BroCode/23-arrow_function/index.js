// example 1
numbers = [1, 2, 3, 4, 5];
squares = numbers.map((element) => Math.pow(element, 2));
console.log(squares);

// example 2
numbers2 = [1, 2, 3, 4, 5];
max = numbers2.reduce((prev, next) => Math.max(prev, next));
console.log(max);
