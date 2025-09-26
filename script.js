// Inizializza AOS (animazioni on-scroll)
AOS.init();

// Funzione che avvia le particelle
function startParticles() {
  document.getElementById("particles").style.display = "block";
  particlesJS("particles", {
    "particles": {
      "number": { "value": 50 },
      "size": { "value": 3 },
      "move": { "speed": 2 },
      "line_linked": { "enable": true }
    }
  });

  // Dopo 6 secondi spariscono
  setTimeout(() => {
    document.getElementById("particles").style.display = "none";
  }, 6000);
}

// Avvio iniziale all'apertura sito
startParticles();

// Ogni volta che clicchi su "Home" dalla navbar riavvia animazione
document.querySelectorAll('a[href="#home"]').forEach(link => {
  link.addEventListener("click", () => {
    setTimeout(startParticles, 500); // delay per evitare conflitti
  });
});
