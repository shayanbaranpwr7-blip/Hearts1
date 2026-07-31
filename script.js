const button = document.getElementById("startButton");
const welcome = document.querySelector(".welcome");

const rain = document.getElementById("rain");


for (let i = 0; i < 120; i++) {

    const drop = document.createElement("div");

    drop.className = "raindrop";


    drop.style.left = Math.random() * 100 + "%";

    drop.style.animationDuration =
        (0.5 + Math.random() * 1.5) + "s";


    drop.style.animationDelay =
        Math.random() * 5 + "s";


    rain.appendChild(drop);

}



button.addEventListener("click", () => {

    button.innerText = "Entering... 🤍";


    welcome.style.transition = "2s";

    welcome.style.opacity = "0";

    welcome.style.transform = "scale(0.8)";


    setTimeout(() => {

        welcome.style.opacity = "1";

        welcome.style.transform = "scale(1)";

        button.innerText = "Welcome 🤍";


    }, 2500);


});
