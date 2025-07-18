function updateCountdown() {
  const now = new Date();
  const birthday = new Date();
  birthday.setHours(24, 0, 0, 0); // Midnight tonight

  const diff = birthday - now;

  if (diff <= 0) {
    document.getElementById("countdown").innerText = "🎂 Happy Birthday!";
    return;
  }

  const hours = Math.floor(diff / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  document.getElementById("countdown").innerText =
    `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')} left until your birthday! 🎈`;
}

function goToNextPage() {
  window.location.href = "birthday.html";
}

setInterval(updateCountdown, 1000);

// Confetti burst on page load
confetti({ particleCount: 100, spread: 70, origin: { x: 0.2, y: 0.3 } });
confetti({ particleCount: 100, spread: 70, origin: { x: 0.8, y: 0.3 } });