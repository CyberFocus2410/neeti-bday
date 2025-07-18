window.onload = function () {
  confetti({ particleCount: 100, spread: 70, origin: { x: 0.2, y: 0.3 } });
  confetti({ particleCount: 100, spread: 70, origin: { x: 0.8, y: 0.3 } });

  setTimeout(() => {
    document.getElementById("cake-section").classList.remove("hidden");
  }, 5000);

  document.getElementById("cut-button").addEventListener("click", () => {
    const cakeImage = document.getElementById("cake-image");
    cakeImage.src = "assets/cake_cut.png"; // This is your right-side image
    cakeImage.alt = "Cake Slice";

    // Optional: delay before redirecting to final page
    setTimeout(() => {
      window.location.href = "final.html";
    }, 5000);
  });
};
