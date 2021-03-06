const navMenu = document.getElementById("nav-bar");

function menuScroll() {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    navMenu.className = "on-scroll-color";
  } else {
    navMenu.className = "navigation";
  }
}

window.onscroll = function() {
  menuScroll();
};

window.sr = ScrollReveal();
sr.reveal(".services-reveal", { duration: 2000 }, 300);
sr.reveal(".portfolio-reveal", { duration: 2000 }, 300);
sr.reveal(".about-reveal", { duration: 2000 }, 300);
sr.reveal(".team-reveal", { duration: 2000 }, 300);
