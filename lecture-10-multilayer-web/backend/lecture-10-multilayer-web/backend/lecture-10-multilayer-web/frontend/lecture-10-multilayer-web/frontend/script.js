const API = "https://notes-app-backend.onrender.com";

window.onload = loadNotes;

async function loadNotes() {
    try {
        const res = await fetch(`${API}/notes`);
        const notes = await res.json();
        const list = document.getElementById("notesList");
        list.innerHTML = "";
        notes.forEach(note => {
            list.innerHTML += `
                <div class="note">
                    <span>${note.content}</span>
                    <button class="delete-btn" onclick="deleteNote(${note.id})">Delete</button>
                </div>
            `;
        });
    } catch (err) {
        console.error(err);
    }
}

async function addNote() {
    const content = document.getElementById("noteInput").value;
    if (!content) return;
    await fetch(`${API}/notes`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content })
    });
    document.getElementById("noteInput").value = "";
    document.getElementById("status").textContent = "Note added! ✅";
    setTimeout(() => document.getElementById("status").textContent = "", 2000);
    loadNotes();
}

async function deleteNote(id) {
    await fetch(`${API}/notes/${id}`, { method: "DELETE" });
    loadNotes();
}
