const form = document.getElementById("todoForm");
const input = document.getElementById("todoInput");
const list = document.getElementById("todoList");

let todos = JSON.parse(localStorage.getItem("todos")) || [];

renderTodos();

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const text = input.value.trim();

    // VALIDASI
    if (text === "") {
        alert("Tugas tidak boleh kosong!");
        return;
    }

    todos.push({
        text: text,
        completed: false
    });

    saveTodos();
    renderTodos();
    form.reset();
});

function renderTodos() {
    list.innerHTML = "";

    todos.forEach((todo, index) => {
        const li = document.createElement("li");

        if (todo.completed) {
            li.classList.add("completed");
        }

        li.textContent = todo.text;

        // klik = tandai selesai
        li.addEventListener("click", () => {
            todo.completed = !todo.completed;
            saveTodos();
            renderTodos();
        });

        // tombol hapus
        const delBtn = document.createElement("button");
        delBtn.textContent = "Hapus";
        delBtn.classList.add("delete-btn");

        delBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            todos.splice(index, 1);
            saveTodos();
            renderTodos();
        });

        li.appendChild(delBtn);
        list.appendChild(li);
    });
}

function saveTodos() {
    localStorage.setItem("todos", JSON.stringify(todos));
}
