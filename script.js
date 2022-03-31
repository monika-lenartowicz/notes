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

addButton.addEventListener("click", showPanel);
cancelButton.addEventListener("click", closePanel);
