const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");


let stars = [];
let rain = [];

let rainActive = false;



function resize(){

    canvas.width = window.innerWidth;

    canvas.height = window.innerHeight;

}


resize();

window.addEventListener(
    "resize",
    resize
);





function createStars(){

    stars = [];


    for(let i = 0; i < 250; i++){

        stars.push({

            x: Math.random() * canvas.width,

            y: Math.random() * canvas.height,

            size: Math.random()*2 + .5,

            speed: Math.random()*.3 + .1

        });

    }

}



createStars();





function createRain(){

    rain = [];


    for(let i = 0; i < 150; i++){

        rain.push({

            x: Math.random()*canvas.width,

            y: Math.random()*canvas.height,

            length: Math.random()*20+10,

            speed: Math.random()*5+3

        });

    }

}





function drawRain(){

    if(!rainActive) return;


    ctx.strokeStyle =
    "rgba(170,210,255,.5)";


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
            Math.random()*canvas.width;

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

            Math.PI*2

        );


        ctx.fill();



        star.y += star.speed;



        if(star.y > canvas.height){

            star.y = 0;

        }


    });




    drawRain();



    requestAnimationFrame(
        animate
    );


}



animate();







const button =
document.getElementById("startButton");



button.addEventListener(
"click",
()=>{


    button.innerText =
    "Welcome 🤍";


    rainActive = true;


    createRain();


});
