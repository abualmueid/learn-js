function startTimer() {
    timeoutId = setTimeout(() => window.alert("Timer Started!"), 3000);
}

function clearTimer() {
    clearTimeout(timeoutId);
    window.alert("Timer Cleared!");
}