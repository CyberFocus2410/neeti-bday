window.onload = function () {
  confetti({ particleCount: 100, spread: 70, origin: { x: 0.2, y: 0.3 } });
  confetti({ particleCount: 100, spread: 70, origin: { x: 0.8, y: 0.3 } });

  setTimeout(() => {
    document.getElementById("cake-section").classList.remove("hidden");
  }, 5000);

  document.getElementById("cut-button").addEventListener("click", () => {
    document.getElementById("slice").classList.remove("hidden");

    setTimeout(() => {
      window.location.href = "final.html";
    }, 5000);
  });
};