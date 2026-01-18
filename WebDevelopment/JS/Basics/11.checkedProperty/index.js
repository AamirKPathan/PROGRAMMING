const myCheckBox = document.getElementById("myCheckbox");
const visaButton = document.getElementById("visaButton");
const masterCardButton = document.getElementById("masterCardButton");
const amexButton = document.getElementById("amexButton");
const mySubmit = document.getElementById("mySubmit");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

mySubmit.onclick = function() {
    if (myCheckBox.checked) {
        subResult.textContent = "You are subscribed!";
    } else {
        subResult.textContent = "You are not subscribed.";
    }

    if (visaButton.checked) {
        paymentResult.textContent = "You selected Visa as your payment method.";
    } else if (masterCardButton.checked) {
        paymentResult.textContent = "You selected MasterCard as your payment method.";
    } else if (amexButton.checked) {
        paymentResult.textContent = "You selected Amex as your payment method.";
    } else {
        paymentResult.textContent = "No payment method selected.";
    }
}
