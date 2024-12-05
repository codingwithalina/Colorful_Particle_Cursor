// Container für die Partikel
const container = document.getElementById('magic-cursor');

// Eventlistener für Mausbewegungen
document.addEventListener('mousemove', (event) => {
  // Anzahl der Partikel pro Mausbewegung
  for (let i = 0; i < 15; i++) {
    createParticle(event.clientX, event.clientY);
  }
});

// Funktion zum Erstellen eines Partikels
function createParticle(x, y) {
  const particle = document.createElement('div');
  particle.classList.add('particle');

  // Zufällige Größe der Partikel
  const size = Math.random() * 5 + 2; // Größe zwischen 2px und 7px
particle.style.width = `${size}px`;
particle.style.height = `${size}px`;


  // Zufällige Farbe
  particle.style.backgroundColor = getRandomColor();

  // Position des Partikels
  particle.style.left = `${x}px`;
  particle.style.top = `${y}px`;

  // Zufällige Flugrichtung (benutze CSS-Variablen für die Bewegung)
  const angle = Math.random() * 2 * Math.PI; // Zufälliger Winkel in Bogenmaß
  const velocity = Math.random() * 110 + 20; // Geschwindigkeit (20-70px)
  particle.style.setProperty('--x', `${Math.cos(angle) * velocity}px`);
  particle.style.setProperty('--y', `${Math.sin(angle) * velocity}px`);
  


  // Partikel zum Container hinzufügen
  container.appendChild(particle);

  // Entferne das Partikel nach der Animation
  setTimeout(() => {
    particle.remove();
  }, 1000); // Nach 1 Sekunde
}

// Funktion, um zufällige Farben zu generieren
function getRandomColor() {
  const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff', '#ffffff'];
  return colors[Math.floor(Math.random() * colors.length)];
}
