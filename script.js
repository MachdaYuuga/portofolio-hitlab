// =============================
// DARK MODE TOGGLE
// =============================
const toggleBtn = document.getElementById("darkModeToggle");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    toggleBtn.textContent = "☀ Light Mode";
  } else {
    toggleBtn.textContent = "🌙 Dark Mode";
  }
});


// =============================
// FORM SUBMIT TANPA RELOAD
// =============================
const form = document.getElementById("contactForm");
const message = document.getElementById("formMessage");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  const nama = document.getElementById("name").value;

  message.textContent = `Halo ${nama}, pesan Anda berhasil terkirim! 💖`;

  form.reset();
});


// =============================
// SMOOTH SCROLL NAVIGATION
// =============================
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    target.scrollIntoView({
      behavior: "smooth"
    });
  });
});

