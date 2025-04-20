fruits = ["apple", "banana", "coconut", "jackfruit", "mango"];

fruitsArray = fruits.map(uppercase);
console.log(fruitsArray);

function uppercase(element) {
    return element.toUpperCase();
}

// another example

dates = ["2025-4-20", "2026-5-30", "2027-7-10"];

newDates = dates.map(formatDate);
console.log(newDates);

function formatDate(element) {
    parts = element.split('-');

    return `${parts[2]}/${parts[1]}/${parts[0]}`;
}