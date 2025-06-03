// getElementById()

const name = document.getElementById("name");

name.style.backgroundColor = "yellow";
name.style.textAlign = "center";

console.log(name);

// getElementsByClassName()

const fruits = document.getElementsByClassName("fruits");
console.log(fruits);

Array.from(fruits).forEach(fruit => {
    fruit.style.backgroundColor = "orange";
});

// getElementsByTagName()

const h2Elements = document.getElementsByTagName("h2");
console.log(h2Elements);

for(let h2Element of h2Elements) {
    h2Element.style.backgroundColor = "grey";
}

// querySelector()

const listItem = document.querySelector("ul");
listItem.style.backgroundColor = "lightgreen";

// QuerySelectorAll()

const noodlesItems = document.querySelectorAll("ol");
noodlesItems.forEach(noodlesItem => {
    noodlesItem.style.backgroundColor = "pink";
});
