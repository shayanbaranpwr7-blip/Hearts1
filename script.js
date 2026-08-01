const button = document.getElementById("startButton");
const welcome = document.querySelector(".welcome");

button.addEventListener("click", () => {
    button.disabled = true;
    button.innerText = "Entering... 🤍";

    welcome.style.transition = "1.8s ease";
    welcome.style.opacity = "0";
    welcome.style.transform = "scale(0.95)";

    setTimeout(() => {
        button.innerText = "Welcome 🤍";
        welcome.style.opacity = "1";
        welcome.style.transform = "scale(1)";
        button.disabled = false;
    }, 1800);
});
