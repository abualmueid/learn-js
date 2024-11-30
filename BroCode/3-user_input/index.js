let username;

document.getElementById("submit").onclick = function() {
    username = document.getElementById("username").value;
    // username = window.prompt();
    document.getElementById("welcome").textContent = `Hello ${username}`;
}