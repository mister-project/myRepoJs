//todo-control
//header-input
//todo-list
//todo-completed
const todoControl = document.querySelector('.todo-control'); //Получаем форму
const headerInput = document.querySelector('.header-input'); //Поле ввода в форму
const todoList = document.querySelector('.todo-list'); //Первый элемент из списка невыполненных задач
const todoCompleted = document.querySelector('.todo-completed'); //Первый элемент из списка выполненных задач



const toDoData = []

//функция для отрисовки наших to-do-шек
const render = function () {
    todoList.innerHTML = ''
    todoCompleted.innerHTML = ''
    toDoData.forEach(function (item) {
        //формируем новые пункты с нужной разметкой
        const li = document.createElement('li')
        li.classList.add('todo-item')

        li.innerHTML = '<span class="text-todo">' + item.text + '</span>' +
            '<div class="todo-buttons">' +
            '<button class="todo-remove"></button>' +
            '<button class="todo-complete"></button>' +
            '</div>'
        //сортируем дела по спискам условия в if
        if (item.completed) {
            // через append Публикуем пункты, попавшие в опрос forEach в разметку (будут видны в браузере)
            todoCompleted.append(li)
        } else {
            todoList.append(li)

        }
        console.log(todoList.innerHTML)
        li.querySelector('.todo-complete').addEventListener('click', function () {
            item.completed = !item.completed
            render()
        })

    })
}


todoControl.addEventListener('submit', function (event) {
    event.preventDefault()

    const newToDo = {
        text: headerInput.value,
        completed: false

    }

    toDoData.push(newToDo)
    headerInput.value = ''

    render()

})