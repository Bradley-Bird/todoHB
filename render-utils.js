export function renderTodo(todo) {
    // create a div and a p tag
    const ul = document.createElement('ul');
    const li = document.createElement('li');
    // depending on whether the todo is complete, give the div the appropriate css class ('complete' or 'incomplete')
    if (todo.complete) {
        li.classList.add('complete');
    }
    // add the 'todo' css class no matter what

    // put the todo's text into the p tag
    li.textContent = todo.todo;

    // append stuff
    ul.append(li);
    // return the div
    return ul;
}
