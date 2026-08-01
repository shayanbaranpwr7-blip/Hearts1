const canvas = document.getElementById("canvas");

const ctx = canvas.getContext("2d");

let stars = [];

function resize(){

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

}

resize();

window.addEventListener("resize", resize);



for(let i = 0; i < 250; i++){

    stars.push({

        x: Math.random() * canvas.width,

        y: Math.random() * canvas.height,

        size: Math.random() * 2 + 0.5,

        speed: Math.random() * 0.3 + 0.1

    });

}



function draw(){

    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );


    ctx.fillStyle = "white";


    stars.forEach(star=>{

        ctx.beginPath();

        ctx.arc(
            star.x,
            star.y,
            star.size,
            0,
            Math.PI * 2
        );

        ctx.fill();


        star.y += star.speed;


        if(star.y > canvas.height){

            star.y = 0;

        }

    });

drawRain();
    requestAnimationFrame(drawStars);

}


draw();



const button = document.getElementById("startButton");


button.addEventListener("click", ()=>{

    button.innerText = "Welcome 🤍";
rainStarted = true;
startRain();
createRain();
});
// Rain system
let rain = [];

function startRain(){

    rain = [];

    for(let i = 0; i < 150; i++){

        rain.push({

            x: Math.random() * width,

            y: Math.random() * height,

            length: Math.random()*20+10,

            speed: Math.random()*6+4

        });

    }

}


function drawRain(){

    ctx.strokeStyle = "rgba(180,220,255,0.5)";

    ctx.lineWidth = 1;


    rain.forEach(drop=>{

        ctx.beginPath();

        ctx.moveTo(drop.x, drop.y);

        ctx.lineTo(
            drop.x,
            drop.y + drop.length
        );

        ctx.stroke();


        drop.y += drop.speed;


        if(drop.y > height){

            drop.y = -20;

            drop.x = Math.random()*width;

        }

    });

}
