```javascript
// CLOCK

function updateClock(){

    const now = new Date();

    const time =
        now.toLocaleTimeString("tr-TR");

    document.getElementById("clock").innerText = time;
}

setInterval(updateClock,1000);

updateClock();


// TRAFFIC LIGHT

const lights = [
    "red-light",
    "yellow-light",
    "green-light"
];

let currentLight = 0;

setInterval(()=>{

    document
        .querySelectorAll(".light")
        .forEach(light=>light.classList.remove("active"));

    document
        .querySelector(`.${lights[currentLight]}`)
        .classList.add("active");

    currentLight++;

    if(currentLight >= lights.length){
        currentLight = 0;
    }

},5000);


// DYNAMIC SIGNS

const signs = [
    "30",
    "50",
    "100",
    "🛑",
    "🚶",
    "↩️"
];

setInterval(()=>{

    document
        .querySelectorAll(".dynamic-sign")
        .forEach(sign=>{

            const random =
                signs[Math.floor(Math.random()*signs.length)];

            sign.innerText = random;

        });

},3000);


// TERMINAL LOGS

const logs = [

    "> Radar sistemi aktif.",
    "> Yeni sınav modülü yüklendi.",
    "> Gece sürüş simülasyonu hazır.",
    "> Trafik yoğunluğu hesaplanıyor.",
    "> Kavşak analiz sistemi aktif.",
    "> Şerit takip sistemi çalışıyor.",
    "> Sürücü refleks testi başlatıldı."

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


// COUNTER ANIMATION

function animateCounter(id,target,suffix=""){

    let count = 0;

    const element =
        document.getElementById(id);

    const increment =
        target / 120;

    const interval =
        setInterval(()=>{

            count += increment;

            if(count >= target){

                count = target;

                clearInterval(interval);
            }

            element.innerText =
                Math.floor(count) + suffix;

        },20);

}

animateCounter("studentCount",25000);
animateCounter("questionCount",5200);
animateCounter("successRate",98,"%");


// HORN EFFECT

document
.getElementById("hornBtn")
.addEventListener("click",()=>{

    document.body.classList.add("flash");

    setTimeout(()=>{
        document.body.classList.remove("flash");
    },400);

    alert("📢 BİP BİP!");
});


// SIGNAL EFFECT

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

                vehicle.style.filter = "none";

            });

    },1200);

});


// SCROLL SPEED EFFECT

window.addEventListener("scroll",()=>{

    const scroll =
        window.scrollY;

    const speed =
        Math.min(scroll / 100,8);

    document
        .querySelector(".car")
        .style.animationDuration =
            `${12 - speed}s`;

    document
        .querySelector(".ambulance")
        .style.animationDuration =
            `${6 - speed/2}s`;

});


// START BUTTON

document
.getElementById("startExam")
.addEventListener("click",()=>{

    alert("🚦 Sınav Simülatörü Başlatılıyor...");

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
    "01アイウエオカキクケコサシスセソABCDEFGHIJKLMNOPQRSTUVWXYZ";

const fontSize = 14;

const columns =
    canvas.width / fontSize;

const drops = [];

for(let x=0; x<columns; x++){

    drops[x] = 1;
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
            Math.random() > 0.975
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
