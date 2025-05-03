// Closure: function inside a function

function createCounter() {
    let counter = 0;

    function increment() {
        counter++;
        console.log(`Counter: ${counter}`);
    }

    function getCounter() {
        return counter;
    }

    return {increment, getCounter};
}

const counter = createCounter();
counter.increment();
counter.increment();
console.log(counter.getCounter());