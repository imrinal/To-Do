document.addEventListener("DOMContentLoaded", function() {
    const counterElement = document.getElementById("counter");
    const finalValue = 5000;
    let counterValue = 0;
    const duration = 3000; // 5 seconds
    const interval = duration / finalValue;

    function updateCounter() {
        counterElement.textContent = counterValue;
        counterValue++;

        if (counterValue <= finalValue) {
            setTimeout(updateCounter, interval);
        }
    }

    updateCounter();
});

function handleButtonClick() {
    // Redirect to login.html
    window.location.href = "login.html";
}

function redirectToIndex() {
    window.location.href = 'index.html';
}