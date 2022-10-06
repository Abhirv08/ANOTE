let noteTitle = document.getElementById("note_title");
let noteContent = document.getElementById("note_content");
let addNote = document.getElementById("add_note");
let container = document.getElementById("Container");

function toPascalCase(s){
    return s.slice(0, 1).toUpperCase() + s.slice(1).toLowerCase();
}

function displayNote(){
    let note = `
    <div class = "notes">
        <div class="nav_function">
            <p id="listedNoteTitle">${toPascalCase(noteTitle.value)}</p>
            <div class="functions">
                <div id="edit"><img src="./images/edit.png" /></div>
                <div id="delete"><img src="./images/delete.png" /></div>
            </div>
        </div>

        <div id="listedNoteContent">${noteContent.value}</div>
    </div>`;
    container.innerHTML += note;
    noteContent.value = "";
    noteTitle.value = "";
}

addNote.addEventListener("click", function(e){
    let titleLength = noteTitle.value.length;
    let contentLength = noteContent.value.length;
    
    if(titleLength === 0 || contentLength === 0){
        window.alert("Please fill all details");
    }else{
        displayNote();
    }
})
