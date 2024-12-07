///// Without method chaining /////

// Trim white spaces, take first char and make it uppercase

let username = window.prompt();
username = username.trim();
let firstLetter = username.charAt(0);
firstLetter = firstLetter.toUpperCase();

// Take extra characters and make them lowercase
let extraChars = username.slice(1);
extraChars = extraChars.toLowerCase();

username = firstLetter + extraChars;
console.log(username);

///// With method chaining ///// 

let username2 = window.prompt().trim();
let firstLetter2 = username2.charAt(0).toUpperCase();
let extraChars2 = username2.slice(1).toLowerCase();
username2 = firstLetter2 + extraChars2;

console.log(username2);