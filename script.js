window.addEventListener("scrool", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 100) {
    navbar, classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});
//Profile section redirecting
const profileIcon = document.querySelector(".profile-icon");
profileIcon.addEventListener("click", () => {
  window.location.href = "profile-details.html";
});
//Movie card
const movieCard = document.querySelector(".content-card");
moviecard.forEach((card) => {
  card.addEventListener("mouseEnter", () => {
    cardstyle.transform = "scale(1.05)";
  });
});

card.addEventListener("mouseleave", () => {
  cardstyle.transform = "scale(1)";
});
