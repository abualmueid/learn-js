let display = document.getElementById("display");
const timerId = null;
let startTime = 0;
let elapsedTime = 0;
let currentTime = 0;
let isRunning = false;

function start() {
    if (!isRunning) {
        startTime = Date.now() - elapsedTime;
        timerId = setInterval(update, 10);
        isRunning = true;
    }
}

function stop() {
    clearInterval(timerId);
    elapsedTime = Date.now() - startTime;
    isRunning = false;
}

function reset() {
    clearInterval(timerId);
    startTime = 0;
    elapsedTime = 0;
    isRunning = false;

    display.textContent = "00:00:00:00";
}

function update() {
    elapsedTime = Date.now() - startTime;
    elapsedTime = elapsedTime / 1000;

    let hours = Math.floor(elapsedTime / 3600);
    let minutes = Math.floor((elapsedTime % 3600) / 60);
    let seconds = Math.floor(((elapsedTime % 3600) % 60) / 60);
    let milliseconds = Math.floor(((elapsedTime % 3600) % 60) % 60);

    display.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`;
}