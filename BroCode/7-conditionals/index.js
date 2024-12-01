
let submitBtn = document.getElementById("submitBtn");
let h3 = document.getElementById("h3");

submitBtn.onclick = function () {
    let age = document.getElementById("age").value;
    age = Number(age);
    
    if (age <= 18) {
        h3.textContent = "You are not allowed to enter the site. You must be 18+ to enter the site!";
    } else {
        h3.textContent = "Welcome to our site!";
    }
}