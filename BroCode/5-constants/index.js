const PI = 3.1416;

document.getElementById("submit").onclick = function() {
    let radius = document.getElementById("radius").value;
    radius = Number(radius);
    let circumference = 2 * PI * radius;
    document.getElementById("circumference").textContent = `Circumference of the circle is ${circumference}`;
}