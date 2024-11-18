const input = document.getElementById("input");
const createButton = document.getElementById("create_button");
const todoList = document.getElementById("todo_list");

const createTodo = () => {
    if (!input.value.trim()) return alert("напиши что нибудь");

    const div = document.createElement("div");
    const text = document.createElement("h3");
    const deleteBtn = document.createElement("button")
    const edit = document.createElement("button")
    div.setAttribute("class", "block_text");
    deleteBtn.setAttribute("class", "delete_button")
    edit.setAttribute("class","edit_button")

    text.innerHTML = input.value;
    deleteBtn.innerHTML = 'delete'
    edit.innerHTML ='edit'

    div.append(text);
    div.append(deleteBtn);
    todoList.append(div);
    div.append(edit)

    input.value = " ";

    deleteBtn.onclick = () => {
        todoList.removeChild(div)
    }
     edit.onclick = () => {
        const di = prompt('Введите измения')
         if(di) {
             text.innerHTML = di;
         }
     }


};

createButton.onclick = () => createTodo();

// createButton.addEventListener("click", createTodo);

// input.addEventListener("keydown", (e) => {
//   if (e.key === "Enter") createTodo();
// });

input.onkeydown = (e) => {
    if (e.key === "Enter") createTodo();
};

