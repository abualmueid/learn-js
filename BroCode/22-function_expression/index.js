// example 1

hello = function hello() {
    console.log("hello");
}

// hello();
console.log(hello);

setTimeout(hello, 5000);

setTimeout(function () {
    console.log("hello");
}, 5000);

// example 2

numbers = [1, 2, 3, 4, 5];

squares = numbers.map(function (element) {
    return Math.pow(element, 2);
});

console.log(squares);

// example 3

nums = [10, 20, 30, 45, 55];

evenNums = nums.filter(function (element) {
    return element % 2 === 0;
});

console.log(evenNums);

