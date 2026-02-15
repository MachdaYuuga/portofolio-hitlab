// DARK MODE TOGGLE
const toggleBtn = document.getElementById("darkModeToggle");
const body = document.body;

toggleBtn.addEventListener("click", () => {
    body.classList.toggle("dark");
});


// FORM SUBMIT TANPA RELOAD + PESAN SUKSES
const form = document.getElementById("contactForm");
const message = document.getElementById("formMessage");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const nama = document.getElementById("name").value;

    message.textContent = `Halo ${nama}, pesan Anda berhasil terkirim!`;
    form.reset();
});


// SMOOTH SCROLL
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));
        target.scrollIntoView({
            behavior: "smooth"
        });
    });
});
