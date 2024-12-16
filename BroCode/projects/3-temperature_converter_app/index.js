const inputTemp = document.getElementById("inputTemp");
let outputTemp = document.getElementById("outputTemp");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelsius = document.getElementById("toCelsius");
let test = document.getElementById("test");

function convert() {
    let temp;

    if(toCelsius.checked) {
        temp = Number(inputTemp.value);
        temp = (temp - 32) * 5/9;
        outputTemp.textContent = temp.toFixed(1) + "°C";
    } else if(toFahrenheit.checked) {
        temp = Number(inputTemp.value);
        temp = temp * 9/5 + 32;
        outputTemp.textContent = temp.toFixed(1) + "°F";
    } else {
        outputTemp.textContent = "Select a unit!";
        
    }
}