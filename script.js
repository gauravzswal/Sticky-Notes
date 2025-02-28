const form = document.querySelector("form");
const textarea = document.querySelector(".txtarea");
const btn = document.querySelector(".btn");
const color = document.querySelector("#color");
const notesContainer = document.querySelector(".notesContainer");

const createdNotes = [];
const deletedNotes = [];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const note = {
    text: textarea.value,
    color: color.value,
    timestamp: new Date().toLocaleString(),
    position: createdNotes.length,
  };

  createdNotes.push(note);
  textarea.value = "";
  textarea.focus()
  showNotes();
});

function showNotes() {
  notesContainer.innerHTML = "";
  const fragment = document.createDocumentFragment();

  createdNotes.forEach((note) => {
    noteDiv = document.createElement("div");
    noteDiv.classList.add("notes-box");

    noteDiv.style.backgroundColor = note.color;

    const text = document.createElement("p");
    text.innerText = note.text;

    const timestamp = document.createElement("span");
    timestamp.classList.add("timestamp");
    timestamp.innerText = note.timestamp;

    const close = document.createElement("span");
    close.classList.add("close");
    close.innerHTML = "&times";
    close.addEventListener("click", () => {
      createdNotes.splice(note.position - 1, 1);
      showNotes();
    });

    noteDiv.append(text, close, timestamp);
    fragment.append(noteDiv);
  });

  notesContainer.append(fragment);
}
