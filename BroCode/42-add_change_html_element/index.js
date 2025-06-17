// Create Element

const newH1 = document.createElement("h1");
newH1.textContent = "This is Mueid";
newH1.textAlign = "center";
newH1.style.color = "orange";

// Append Element

document.body.append(newH1);
// document.body.prepend(newH1);

const box1 = document.getElementById("box1");
// box1.append(newH1);
// box1.prepend(newH1);

const boxes = document.querySelectorAll(".box");
// boxes[1].append(newH1);
// boxes[1].prepend(newH1);

// Remove Element

// boxes[1].removeChild(newH1);

// insertBefore()

const box2 = document.getElementById("box2");
document.body.insertBefore(newH1, box2);

// Create Element in Ordered List

const newListItem = document.createElement("li");
newListItem.textContent = "coconut";
newListItem.style.backgroundColor = "lightgreen";
newListItem.style.fontWeight = "bold";

const listItems = document.querySelectorAll("#fruits li");
const fruits = document.getElementById("fruits");
fruits.insertBefore(newListItem, listItems[3]);