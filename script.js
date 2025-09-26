// script.js - carica dopo DOM ready (index.html usa defer)

/* AOS init */
if (typeof AOS !== 'undefined') {
  AOS.init({
    duration: 700,
    once: true,
    anchorPlacement: 'top-bottom'
  });
}

/* Particles: inizializza in modo non bloccante */
function startParticles() {
  // assicurati che l'elemento esista
  if (!document.getElementById('particles')) return;

  // mostra elemento
  document.getElementById('particles').style.display = 'block';

  // inizializza solo se particlesJS è disponibile
  if (typeof particlesJS !== 'undefined') {
    try {
      particlesJS('particles', {
        "particles": {
          "number": { "value": 40 },
          "size": { "value": 2.5 },
          "move": { "speed": 1.8 },
          "line_linked": { "enable": true, "opacity": 0.12 }
        }
      });
    } catch (e) {
      // se l'inizializzazione fallisce, nascondi particles
      document.getElementById('particles').style.display = 'none';
    }
  }
  // spegni dopo 6 secondi per non distrarre
  setTimeout(() => {
    const p = document.getElementById('particles');
    if (p) p.style.display = 'none';
  }, 6000);
}

/* Avvia particles dopo che la pagina è pronta, in modo non bloccante */
document.addEventListener('DOMContentLoaded', () => {
  // small delay per non interferire con il paint iniziale
  setTimeout(startParticles, 300);
});

/* Modal quick contact: quando si invia, apri il Google Form completo in nuova scheda */
document.addEventListener('DOMContentLoaded', () => {
  const quickForm = document.getElementById('quickContactForm');
  if (!quickForm) return;

  quickForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // puoi leggere i valori se vuoi usarli per prefill (non usato qui)
    const formData = new FormData(quickForm);
    const nome = formData.get('nome') || '';
    const email = formData.get('email') || '';

    // URL del Google Form (il tuo)
    const googleFormUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSfVkb7J4SInKZNu5xuhefPnABJ7102eFCOKV7UIWLRMbLCqfQ/viewform';

    // Apri il form completo in nuova scheda (l'utente completerà i dettagli lì)
    window.open(googleFormUrl, '_blank', 'noopener');

    // Chiudi il modal (Bootstrap)
    const modalEl = document.getElementById('quickContactModal');
    const modalInstance = bootstrap.Modal.getInstance(modalEl);
    if (modalInstance) modalInstance.hide();
  });
});
