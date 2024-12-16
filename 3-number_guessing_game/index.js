const min = 1;
const max = 100;
const answer = Math.floor(Math.random() * (max-min+1)) + min;

let guess;
let attempts = 0;

while(true) { 
    guess = window.prompt(`Enter a number between ${min}-${max}`);
    guess = Number(guess);

    if(isNaN(guess) || guess < min || guess > max) {
        window.alert("Please enter a valid number!");
    } else {
        attempts++;
        if(guess < answer) {
            window.alert("TOO LOW. Try again!");
        } else if(guess > answer) {
            window.alert("TOO HIGH. Try again!");
        } else {
            window.alert(`Hurray! Your guess is correct! The number is ${answer} and it took ${attempts} attempts.`);
            break;
        }
    }
}
