const canvas = document.getElementById("sky");
const ctx = canvas.getContext("2d");

let stars = [];
let rain = [];
let rainActive = false;


function resizeCanvas(){

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

}

resizeCanvas();

window.addEventListener("resize", resizeCanvas);



function createStars(){

    stars = [];

    for(let i = 0; i < 250; i++){

        stars.push({

            x: Math.random() * canvas.width,

            y: Math.random() * canvas.height,

            size: Math.random() * 2 + 0.5,

            speed: Math.random() * 0.3 + 0.1

        });

    }

}


createStars();



function createRain(){

    rain = [];

    for(let i = 0; i < 180; i++){

        rain.push({

            x: Math.random() * canvas.width,

            y: Math.random() * canvas.height,

            length: Math.random() * 20 + 10,

            speed: Math.random() * 5 + 3

        });

    }

}



function drawRain(){

    if(!rainActive) return;


    ctx.strokeStyle =
    "rgba(170,210,255,0.5)";


    ctx.lineWidth = 1;


    rain.forEach(drop=>{


        ctx.beginPath();


        ctx.moveTo(
            drop.x,
            drop.y
        );


        ctx.lineTo(
            drop.x,
            drop.y + drop.length
        );


        ctx.stroke();


        drop.y += drop.speed;


        if(drop.y > canvas.height){

            drop.y = -20;

            drop.x =
            Math.random() * canvas.width;

        }


    });

}




function animate(){


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


    requestAnimationFrame(animate);

}


animate();





const button =
document.getElementById("startButton");


button.addEventListener("click",()=>{


    button.innerText =
    "Welcome 🤍";


    rainActive = true;


    createRain();


});
