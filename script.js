const button = document.getElementById("startButton");
const welcome = document.querySelector(".welcome");


button.addEventListener("click", () => {

    button.innerText = "Entering... 🤍";


    welcome.style.transition = "2s";

    welcome.style.opacity = "0";

    welcome.style.transform = "scale(0.8)";


    setTimeout(() => {

        button.innerText = "Welcome 🤍";

        welcome.style.opacity = "1";

        welcome.style.transform = "scale(1)";


    }, 2500);


});
