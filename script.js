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


```javascript
// TERMINAL LOGS

const logs = [

"> Motor yağı seviyesi kontrol ediliyor...",
"> Lastik hava basınçları ideal seviyede.",
"> Fren hidroliği güvenli aralıkta.",
"> Far sistemi test edildi.",
"> Stop lambaları çalışıyor.",
"> Silecek mekanizması aktif.",
"> Emniyet kemeri takıldı.",
"> Sürücü koltuğu ayarlandı.",
"> Dikiz aynaları kontrol edildi.",
"> Yan aynalar optimize edildi.",
"> Gösterge paneli aktif.",
"> Tüm uyarı ışıkları söndü.",
"> Yakıt seviyesi yeterli.",
"> ABS sistemi çalışıyor.",
"> El freni kontrol edildi.",
"> Direksiyon tepkileri normal.",
"> Klima sistemi aktif.",
"> Navigasyon sistemi hazır.",
"> Şerit takip sistemi devrede.",
"> Çevresel görüş sensörleri aktif.",
"> Radar taraması tamamlandı.",
"> Trafik yoğunluğu analiz ediliyor...",
"> Güvenli sürüş modu etkin.",
"> Kavşak geçiş sistemi hazır.",
"> Sürüş simülasyonu başlatılıyor...",
"> Tüm sistemler stabil çalışıyor.",
"> Araç sürüşe hazır. ✔"

];

const terminal =
document.getElementById("terminalContent");

terminal.innerHTML = "";

let logIndex = 0;

function typeLogs(){

    if(logIndex >= logs.length) return;

    let text = logs[logIndex];

    let i = 0;

    let line = document.createElement("div");

    line.classList.add("terminal-line");

    terminal.appendChild(line);

    const typing = setInterval(()=>{

        line.innerHTML += text.charAt(i);

        i++;

        terminal.scrollTop = terminal.scrollHeight;

        if(i >= text.length){

            clearInterval(typing);

            logIndex++;

            setTimeout(typeLogs,180);

        }

    },18);

}

typeLogs();
```



const terminal =
document.getElementById("terminalContent");

setInterval(()=>{

    const random =
    logs[Math.floor(Math.random()*logs.length)];

    terminal.innerHTML += random + "<br>";

    terminal.scrollTop =
    terminal.scrollHeight;

},2500);


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
