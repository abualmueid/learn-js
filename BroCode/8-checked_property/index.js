let subscribe = document.getElementById("subscribe");
let visa = document.getElementById("visa");
let mastercard = document.getElementById("mastercard");
let paypal = document.getElementById("paypal");
let submit = document.getElementById("submit");
let subscribeResult = document.getElementById("subscribeResult");
let paymentResult = document.getElementById("paymentResult");

submit.onclick = function () {
    if (subscribe.checked) {
        subscribeResult.textContent = "Thanks for subscribing!";
    } else {
        subscribeResult.textContent = "You are NOT subscribed!";
    } 

    if (subscribe.checked) {
        if (visa.checked) {
            paymentResult.textContent = "Your payment method is Visa.";
        } else if (mastercard.checked) {
            paymentResult.textContent = "Your payment method is MasterCard.";
        } else if (paypal.checked) {
            paymentResult.textContent = "Your payment method is Paypal.";
        }
    } else {
        subscribeResult.textContent = "Please subscribe first!";
    }
}