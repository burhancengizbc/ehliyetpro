// 1. CLOCK
function updateClock() {
    const now = new Date();
    const clockElement = document.getElementById("clock");
    if (clockElement) {
        clockElement.innerText = now.toLocaleTimeString("tr-TR");
    }
}
setInterval(updateClock, 1000);
updateClock();

// 2. TRAFFIC LIGHT
const lights = ["red-light", "yellow-light", "green-light"];
let current = 0;
setInterval(() => {
    const lightElements = document.querySelectorAll(".light");
    lightElements.forEach(light => light.classList.remove("active"));
    
    const activeLight = document.querySelector(`.${lights[current]}`);
    if (activeLight) {
        activeLight.classList.add("active");
    }
    
    current++;
    if (current >= lights.length) current = 0;
}, 5000);

// 3. TERMINAL LOGS (Daktilo Efektli)
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

const terminal = document.getElementById("terminalContent");

window.addEventListener('DOMContentLoaded', () => {
    if (!terminal) return;
    
    terminal.innerHTML = ""; 
    let logIndex = 0;

    function typeLogs() {
        if (logIndex >= logs.length) return;
        
        let text = logs[logIndex];
        let i = 0;
        let line = document.createElement("div");
        line.style.marginBottom = "5px";
        line.style.color = "#00ff88"; // Rengi burada garantiledik
        terminal.appendChild(line);

        const typing = setInterval(() => {
            line.innerHTML += text.charAt(i);
            i++;
            terminal.scrollTop = terminal.scrollHeight;
            if (i >= text.length) {
                clearInterval(typing);
                logIndex++;
                setTimeout(typeLogs, 180);
            }
        }, 15);
    }
    typeLogs();
});

// 4. SCROLL EFFECT
window.addEventListener("scroll", () => {
    const scroll = window.scrollY;
    const hero = document.querySelector(".hero");
    if (hero) {
        hero.style.transform = `translateY(${scroll * .08}px)`;
    }
});
