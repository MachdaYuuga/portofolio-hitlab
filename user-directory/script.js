const container = document.getElementById("userContainer");
const loading = document.getElementById("loading");
const errorBox = document.getElementById("error");

async function loadUsers() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");

        if (!response.ok) {
            throw new Error("Gagal mengambil data");
        }

        const users = await response.json();

        loading.style.display = "none";

        // tampilkan minimal 6 user
        users.slice(0, 6).forEach(user => {
            const card = document.createElement("div");
            card.className = "card";

            card.innerHTML = `
                <h3>${user.name}</h3>
                <p>Email: ${user.email}</p>
                <p>Perusahaan: ${user.company.name}</p>
            `;

            container.appendChild(card);
        });

    } catch (error) {
        loading.style.display = "none";
        errorBox.textContent = "Maaf, data gagal dimuat";
        console.error(error);
    }
}

loadUsers();
