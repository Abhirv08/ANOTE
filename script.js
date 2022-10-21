let noteTitleBox = document.getElementById("note_title");
let noteContentBox = document.getElementById("note_content");
let noteTitle, noteContent;
let addNote = document.getElementById("add_note");
let container = document.getElementById("Container");
let list = [];
let i = 0;



addNote.addEventListener("click", function () {
    noteTitle = noteTitleBox.value;
    noteContent = noteContentBox.value;

    let titleLength = noteTitle.length;
    let contentLength = noteContent.length;

    if (titleLength === 0 || contentLength === 0) {
        window.alert("Please fill all details");
    } else {
        addToList(noteTitle, noteContent);
    }
})


function toPascalCase(s) {
    return s.slice(0, 1).toUpperCase() + s.slice(1).toLowerCase();
}

function addToList(noteTitle, noteContent) {
    let note = {
        title: toPascalCase(noteTitle),
        desc: noteContent
    }

    list.push(note);
    i++;

    addToScreen(list);
    noteTitleBox.value = "";
    noteContentBox.value = "";
    editAndDelete();
}

function addToScreen(list) {
    console.log(list);

    container.innerHTML += `<div class = "notes">
            <div class="nav_function">
                <p id="listedNoteTitle">${list[i - 1].title}</p>
                <div class="functions">
                    <div id="edit"><img src="./images/edit.png" /></div>
                    <div id="delete"><img src="./images/delete.png" /></div>
                </div>
            </div>
            <div id="listedNoteContent">${list[i - 1].desc}</div>
        </div>`
}

async function editAndDelete(){
    let editNote = document.getElementById("edit");
    let deleteNote = document.getElementById("delete");

    


}

