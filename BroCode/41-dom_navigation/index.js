// .firstElementChild

// Ex-1
// const element = document.getElementById("fruits");
// const firstChild = element.firstElementChild;
// firstChild.style.backgroundColor = "yellow";

// Ex-2
const elements = document.querySelectorAll("ul");
elements.forEach(element => {
    const firstChild = element.firstElementChild;
    firstChild.style.backgroundColor = "yellow";
});

// .lastElementChild

const element = document.getElementById("fruits");
const lastChild = element.lastElementChild;
lastChild.style.backgroundColor = "green";

// .nextElementSibling

const element2 = document.getElementById("carrots");
const nextSibling = element2.nextElementSibling;
nextSibling.style.backgroundColor = "red";

// .parentElement

const element4 = document.getElementById("cake");
const parentElement = element4.parentElement;
parentElement.style.backgroundColor = "grey";

// .children

const element5 = document.getElementById("vegetables");
const children = element5.children[2];
children.style.backgroundColor = "purple";