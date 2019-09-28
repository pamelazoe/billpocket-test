// Create a visual model for explaining list insertion. The model must consist of three elements:
// - List display section: The section on the page where the list will be displayed.
// - Text field: A field to provide input for inserting a new element into the list.
// - Button (named "Insert"): Clicking this button inserts a new element at the end
// of the existing list using the value provided in the text field.

// Other requirements:
// - No element should be inserted if the text field is empty when the user clicks the button.
// - Every third element in the list must be displayed in red and the remaining elements in black.
const input = document.querySelector(".user-input");
const list = document.querySelector(".list");
const insert = document.querySelector(".ins-btn");
let content = [];

const addElement = () => {
    (input.value.trim() !== "") ? content.push(input.value): "";
    console.log(content)
    const addLi = `<li class="el-list">${content[content.length-1]}</li>`;
    list.insertAdjacentHTML("beforeend", addLi);
}

window.addEventListener("keydown", e => {
    if (e.key === "Enter") {
        addElement();
        input.value = "";
        input.focus();
        list.scrollTop = list.scrollHeight - list.clientHeight;
    }
}, false)

insert.addEventListener("click", e => {
    e.preventDefault();
    addElement();
    input.value = "";
    input.focus();
    list.scrollTop = list.scrollHeight - list.clientHeight;
}, false)