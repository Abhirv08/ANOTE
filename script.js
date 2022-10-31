let noteTitleBox = document.getElementById("note_title");
let noteContentBox = document.getElementById("note_content");
let noteTitle, noteContent;
let addNote = document.getElementById("add_note");
let updateNote = document.getElementById("update_note");
let container = document.getElementById("Container");
let i = localStorage.length;


window.addEventListener("DOMContentLoaded", displayNotes())

function toPascalCase(s) {
    return s.slice(0, 1).toUpperCase() + s.slice(1).toLowerCase();
}

function getNotes() {
    const notes = JSON.parse(localStorage.getItem("ANOTE-notes")) || [];
    return notes;
}



// Add new Note to array as well as local Storage
addNote.addEventListener("click", () => {
    const notes = getNotes();
    let title = toPascalCase(noteTitleBox.value);
    let desc = noteContentBox.value;
    const note = { title: title, desc: desc }
    if (title.length > 0 && desc.length > 0) {
        notes.push(note);
        localStorage.setItem("ANOTE-notes", JSON.stringify(notes));
    } else {
        window.alert("Please fill title and description");
    }
    displayNotes();
    noteTitleBox.value = "";
    noteContentBox.value = "";
})

// Display all notes available to the user
function displayNotes() {
    const notes = getNotes();
    if(notes.length === 0){
        container.classList.remove("with-notes");
        container.innerHTML = "Nothing to show. Please add your notes...";
        return ;
    }
    container.classList.add("with-notes");
    let allNotes = "";

    for (let i = 0; i < notes.length; i++) {
        allNotes +=
            `<div class = "notes">
                <div class="nav_function">
                    <p id="listedNoteTitle">${notes[i].title}</p>
                    <div class="functions">
                        <div id="${i}" onclick="editNote(this.id)"><img src="./images/edit.png" /></div>
                        <div id="${i}" onclick = "deleteNote(this.id)"><img src="./images/delete.png" /></div>
                    </div>
                </div>
                <div id="listedNoteContent">${notes[i].desc}</div>
            </div>`
    }
    container.innerHTML = allNotes;
}

function deleteNote(idx) {
    const notes = getNotes();    

    notes.splice(idx, 1);
    localStorage.setItem("ANOTE-notes", JSON.stringify(notes));
    displayNotes();
}

function editNote(idx) {
    addNote.classList.add("hide_button")
    updateNote.classList.remove("hide_button");
    const notes = getNotes();

    noteTitleBox.value = notes[idx].title;
    noteContentBox.value = notes[idx].desc;
    notes.splice(idx, 1);
    localStorage.setItem("ANOTE-notes", JSON.stringify(notes));
    displayNotes();
}

updateNote.addEventListener("click", () => {
    addNote.classList.remove("hide_button")
    updateNote.classList.add("hide_button");

    const notes = getNotes();
    let title = toPascalCase(noteTitleBox.value);
    let desc = noteContentBox.value;
    const note = { title: title, desc: desc }
    if (title.length > 0 && desc.length > 0) {
        notes.push(note);
        localStorage.setItem("ANOTE-notes", JSON.stringify(notes));
    } else {
        window.alert("Please fill title and description");
    }
    displayNotes();
    noteTitleBox.value = "";
    noteContentBox.value = "";
})  