function hello() {
    console.log("hello");
}

function wait() {
    console.log("wait");
}

function changeHeader(callback1, callback2, x, y) {
    let result = x + y;
    document.getElementById("myH1").textContent = result;
    callback1();
    callback2();
}

changeHeader(hello, wait, 1, 2);