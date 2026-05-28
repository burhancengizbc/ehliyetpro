```javascript
// CLOCK

function updateClock(){

    const now = new Date();

    document.getElementById("clock")
    .innerText =
    now.toLocaleTimeString("tr-TR");
}

setInterval(updateClock,1000);

updateClock();


// TRAFFIC LIGHT

const lights = [
    "red-light",
    "yellow-light",
    "green-light"
];

let current = 0;

setInterval(()=>{

    document
    .querySelectorAll(".light")
    .forEach(light=>light.classList.remove("active"));

    document
    .querySelector(`.${lights[current]}`)
    .classList.add("active");

    current++;

    if(current >= lights.length){
        current = 0;
    }

},5000);


// TERMINAL LOGS

const logs = [

    "> Trafik akışı yoğunlaşıyor...",
    "> Ambulans için yol açılıyor...",
    "> Radar sistemi aktif...",
    "> Şerit takip sistemi çalışıyor...",
    "> Sinyalizasyon kontrol ediliyor...",
    "> Araç takip mesafesi uygun...",
    "> Gece sürüş modu aktif...",
    "> Kavşak kontrol sistemi devrede..."

];

const terminal =
document.getElementById("terminalContent");

setInterval(()=>{

    const random =
    logs[Math.floor(Math.random()*logs.length)];

    terminal.innerHTML += random + "<br>";

    terminal.scrollTop =
    terminal.scrollHeight;

},2500);


// BUTTON EFFECTS

document
.getElementById("hornBtn")
.addEventListener("click",()=>{

    document.body.style.filter =
    "brightness(1.2)";

    setTimeout(()=>{

        document.body.style.filter =
        "brightness(1)";

    },200);

    alert("📢 BİP BİP!");

});


document
.getElementById("signalBtn")
.addEventListener("click",()=>{

    document
    .querySelectorAll(".vehicle")
    .forEach(vehicle=>{

        vehicle.style.filter =
        "drop-shadow(0 0 20px orange)";

    });

    setTimeout(()=>{

        document
        .querySelectorAll(".vehicle")
        .forEach(vehicle=>{

            vehicle.style.filter =
            "drop-shadow(0 0 12px rgba(255,255,255,.5))";

        });

    },1200);

});


// SCROLL EFFECT

window.addEventListener("scroll",()=>{

    const scroll =
    window.scrollY;

    document.querySelector(".hero")
    .style.transform =
    `translateY(${scroll * .08}px)`;

});


// MATRIX EFFECT

const canvas =
document.getElementById("matrix");

const ctx =
canvas.getContext("2d");

canvas.width =
window.innerWidth;

canvas.height =
window.innerHeight;

const letters =
"アイウエオカキクケコ0123456789";

const fontSize = 16;

const columns =
canvas.width / fontSize;

const drops = [];

for(let i=0; i<columns; i++){

    drops[i] = 1;
}

function draw(){

    ctx.fillStyle =
    "rgba(0,0,0,0.05)";

    ctx.fillRect(
        0,
        0,
        canvas.width,
        canvas.height
    );

    ctx.fillStyle =
    "#00ff88";

    ctx.font =
    fontSize + "px monospace";

    for(let i=0; i<drops.length; i++){

        const text =
        letters[
            Math.floor(
                Math.random()*letters.length
            )
        ];

        ctx.fillText(
            text,
            i*fontSize,
            drops[i]*fontSize
        );

        if(
            drops[i]*fontSize >
            canvas.height &&
            Math.random() > .975
        ){
            drops[i] = 0;
        }

        drops[i]++;
    }
}

setInterval(draw,35);

window.addEventListener("resize",()=>{

    canvas.width =
    window.innerWidth;

    canvas.height =
    window.innerHeight;

});
```
