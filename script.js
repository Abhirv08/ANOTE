let noteTitleBox = document.getElementById("note_title");
let noteContentBox = document.getElementById("note_content");
let noteTitle, noteContent;
let addNote = document.getElementById("add_note");
let container = document.getElementById("Container");
let i = localStorage.length;

window.addEventListener("DOMContentLoaded", function () {
    for (var j = 0; j < localStorage.length; j++) {
        var item = JSON.parse(localStorage.getItem(j))
        addToScreen(item.title, item.desc, j);
    }
})

addNote.addEventListener("click", function () {
    noteTitle = toPascalCase(noteTitleBox.value);
    noteContent = noteContentBox.value;

    let titleLength = noteTitle.length;
    let contentLength = noteContent.length;

    if (titleLength === 0 || contentLength === 0) {
        window.alert("Please fill all details");
    } else {
        addToLocalStorage(noteTitle, noteContent);
    }
    noteTitleBox.value = "";
    noteContentBox.value = "";
})

function toPascalCase(s) {
    return s.slice(0, 1).toUpperCase() + s.slice(1).toLowerCase();
}

function addToLocalStorage(noteTitle, noteContent) {
    let note = {
        title: noteTitle,
        desc: noteContent
    }
    addToScreen(noteTitle, noteContent, i);
    localStorage.setItem(i, JSON.stringify(note));
    i++;
}

function addToScreen(noteTitle, noteContent, i) {
    console.log(i)
    container.innerHTML +=
        `<div class = "notes">
            <div class="nav_function">
                <p id="listedNoteTitle">${noteTitle}</p>
                <div class="functions">
                    <div id="${i}" onclick="editNote(this.id)"><img src="./images/edit.png" /></div>
                    <div id="${i}" onclick = "deleteNote(this.id)"><img src="./images/delete.png" /></div>
                </div>
            </div>
            <div id="listedNoteContent">${noteContent}</div>
        </div>`
}   


function deleteNote(id){
    localStorage.removeItem(id);
    updateLocalStorage();
}

function editNote(id){
    console.log(id)
}