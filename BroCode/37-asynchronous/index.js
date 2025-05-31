// Example 1 : Asynchronous

setTimeout(() => {
    console.log("Task 1");
}, timeout = 2000);

console.log("Task 2");
console.log("Task 3");
console.log("Task 4");

// Example 2 : Synchronous
/*
function func1(callback) {
    setTimeout(() => {
        console.log("Task 1");
        callback();
    }, timeout = 2000);
}

function func2() {
    console.log("Task 2");
    console.log("Task 3");
    console.log("Task 4");
}
*/
func1(func2);