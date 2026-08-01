const scene = document.getElementById("scene");

const starScene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);

const renderer = new THREE.WebGLRenderer({
    alpha: true,
    antialias: true
});

renderer.setSize(
    window.innerWidth,
    window.innerHeight
);

scene.appendChild(renderer.domElement);


camera.position.z = 5;



const starGeometry = new THREE.BufferGeometry();

const starPositions = [];

for(let i = 0; i < 3000; i++){

    starPositions.push(
        (Math.random() - 0.5) * 200,
        (Math.random() - 0.5) * 200,
        (Math.random() - 0.5) * 200
    );

}


starGeometry.setAttribute(
    "position",
    new THREE.Float32BufferAttribute(
        starPositions,
        3
    )
);


const starMaterial = new THREE.PointsMaterial({

    color:0xffffff,

    size:0.5

});


const stars = new THREE.Points(
    starGeometry,
    starMaterial
);


starScene.add(stars);



function animate(){

    requestAnimationFrame(animate);

    stars.rotation.y += 0.0005;

    renderer.render(
        starScene,
        camera
    );

}


animate();



window.addEventListener(
    "resize",
    ()=>{

        camera.aspect =
        window.innerWidth /
        window.innerHeight;

        camera.updateProjectionMatrix();

        renderer.setSize(
            window.innerWidth,
            window.innerHeight
        );

    }
);



const button =
document.getElementById("startButton");


button.addEventListener(
"click",
()=>{

    button.innerText =
    "Entering... 🤍";

});
