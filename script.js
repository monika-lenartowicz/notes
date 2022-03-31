const addButton = document.querySelector(".add");
const removeAllButton = document.querySelector(".deleteAll");
const deleteNoteButtons = document.getElementsByClassName(".deleteNote");
const saveButton = document.querySelector(".save");
const cancelButton = document.querySelector(".cancel");

const noteArea = document.querySelector(".noteArea");
const notePanel = document.querySelector(".notePanel");
const category = document.querySelector(".notePanel__select");
const textArea = document.querySelector(".notePanel__textArea ");
const error = document.querySelector(".norePanel__error");

let selectedValue;
let cardId = 0;

const noteBody = document.querySelector(".noteBody");

const showPanel = () => {
	notePanel.style.display = "flex";
};

const closePanel = () => {
	notePanel.style.display = "none";
	error.style.visibility = "hidden";
	textArea.value = "";
	category.selectedIndex = 0;
};

const addNote = () => {
	if (textArea.value !== "" && category.options[category.selectedIndex].value !== "0") {
		createNote();
		error.style.visibility = "hidden";
	} else {
		error.style.visibility = "visible";
	}
};

const createNote = () => {
	const newNote = document.createElement("div");
	newNote.classList.add("note");
	newNote.setAttribute = ("id", cardId);

	newNote.innerHTML = `
		<div class="noteHeader">
					<h2 class="noteTitle">${selectedValue}</h2>
			<button class="deleteNote">
			<i class="fas fa-times icon"></i>
			</button>
		</div>
		<div class="noteBody"> ${textArea.value}
		</div>`;

	noteArea.appendChild(newNote);
	cardId++;
	textArea.value = "";
	category.selectedIndex = 0;
	closePanel();
};

const selectValue = () => {
	selectedValue = category.options[category.selectedIndex].text;
};

addButton.addEventListener("click", showPanel);
cancelButton.addEventListener("click", closePanel);
saveButton.addEventListener("click", addNote);
