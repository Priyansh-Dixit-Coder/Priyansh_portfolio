const html = document.documentElement;

/* ================= THEME ================= */

const themeToggle = document.getElementById("themeToggle");

const savedTheme = localStorage.getItem("portfolio-theme");

if (savedTheme) {
html.setAttribute("data-theme", savedTheme);
updateThemeButton();
}

themeToggle.addEventListener("click", () => {

const currentTheme = html.getAttribute("data-theme");

const newTheme =
currentTheme === "light" ? "dark" : "light";

html.setAttribute("data-theme", newTheme);

localStorage.setItem("portfolio-theme", newTheme);

updateThemeButton();

});

function updateThemeButton() {

const theme = html.getAttribute("data-theme");

themeToggle.textContent =
theme === "light" ? "☾" : "☀";

}

/* ================= MOBILE MENU ================= */

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {

navMenu.classList.toggle("open");

menuToggle.textContent =
navMenu.classList.contains("open") ? "✕" : "☰";

});

/* Close menu after clicking a link */

document.querySelectorAll(".nav-link").forEach(link => {

link.addEventListener("click", () => {

navMenu.classList.remove("open");
menuToggle.textContent = "☰";

});

});

/* ================= SCROLL REVEAL ================= */

const revealElements =
document.querySelectorAll(".reveal");

const revealObserver =
new IntersectionObserver(
entries => {

  entries.forEach(entry => {

    if (entry.isIntersecting) {

      entry.target.classList.add("visible");

      revealObserver.unobserve(entry.target);

    }

  });

},
{
  threshold: 0.12
}

);

revealElements.forEach(element => {
revealObserver.observe(element);
});

/* ================= ACTIVE NAV ================= */

const sections =
document.querySelectorAll("main section");

const navLinks =
document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {

let current = "";

sections.forEach(section => {

const sectionTop =
  section.offsetTop - 130;

if (window.scrollY >= sectionTop) {
  current = section.getAttribute("id");
}

});

navLinks.forEach(link => {

link.classList.remove("active");

if (link.getAttribute("href") === `#${current}`) {
  link.classList.add("active");
}

});

});

/* ================= SCROLL PROGRESS ================= */

const progressBar =
document.getElementById("progressBar");

window.addEventListener("scroll", () => {

const scrollTop = window.scrollY;

const documentHeight =
document.documentElement.scrollHeight -
document.documentElement.clientHeight;

const progress =
(scrollTop / documentHeight) * 100;

progressBar.style.width = "${progress}%";

});

/* ================= PROFILE IMAGE FALLBACK ================= */

const profileImage =
document.getElementById("profileImage");

const profilePlaceholder =
document.getElementById("profilePlaceholder");

profileImage.addEventListener("error", () => {

profileImage.style.display = "none";
profilePlaceholder.style.display = "grid";

});

/* ================= CURRENT YEAR ================= */

const yearText =
document.querySelector("footer p");

if (yearText) {

yearText.innerHTML =
"© ${new Date().getFullYear()} Priyansh Dixit. Built with HTML, CSS & JavaScript.";

}