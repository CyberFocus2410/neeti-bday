window.onload = function () {
  confetti({ particleCount: 100, spread: 70, origin: { x: 0.2, y: 0.3 } });
  confetti({ particleCount: 100, spread: 70, origin: { x: 0.8, y: 0.3 } });

  // Show cake and button together after 5s
  setTimeout(() => {
    document.getElementById("cake-section").classList.remove("hidden");
  }, 5000);

  document.getElementById("cut-button").addEventListener("click", () => {
    const cakeImage = document.getElementById("cake-image");
    cakeImage.src = "assets/cake_cut.png";
    cakeImage.alt = "Cake Slice";

    setTimeout(() => {
      window.location.href = "final.html";
    }, 5000);
  });
};
