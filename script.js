// Rastgele Trafik Olayları
setInterval(() => {
    const terminal = document.getElementById("terminalContent");
    const events = [
        "> ⚠️ Tali yoldan araç çıkıyor!",
        "> 🚦 Trafik ışıkları döngüsü değişti.",
        "> 💨 Hız sınırları güncellendi.",
        "> 🚨 Acil durum aracı tespit edildi!",
        "> 🚧 Yol çalışması algılandı."
    ];
    const randomEvent = events[Math.floor(Math.random() * events.length)];
    terminal.innerHTML += randomEvent + "<br>";
    terminal.scrollTop = terminal.scrollHeight;
}, 8000);
