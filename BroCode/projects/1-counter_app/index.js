let decreaseBtn = document.getElementById("decreaseBtn");
let resetBtn = document.getElementById("resetBtn");
let increaseBtn = document.getElementById("increaseBtn");
let countLabel = document.getElementById("countLabel");
let counter = 0;

decreaseBtn.onclick = function () {
    counter--;
    countLabel.textContent = counter;
}

resetBtn.onclick = function () {
    counter = 0;
    countLabel.textContent = counter;
}

increaseBtn.onclick = function () {
    counter++;
    countLabel.textContent = counter;
}

