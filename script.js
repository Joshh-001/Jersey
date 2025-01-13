// script.js
document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll("button");

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            alert("Feature coming soon! Contact us to order.");
        });
    });
});
