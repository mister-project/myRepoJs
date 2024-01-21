//todo-control - 
//header-input - поле ввода задач
//todo-list - лист невыполненных задач
//todo-completed - лист выполненных задач
const todoControl = document.querySelector('.todo-control'); //Получаем форму
const headerInput = document.querySelector('.header-input'); //Поле ввода в форму
const todoList = document.querySelector('.todo-list'); //Первый элемент из списка невыполненных задач
const todoCompleted = document.querySelector('.todo-completed'); //Первый элемент из списка выполненных задач

let localStorageGet = localStorage.getItem("todoList1") ? JSON.parse(localStorage.getItem("todoList1")) : []; //Переменная, содержащая массив задач из localStorage 

const toDoData = localStorageGet // Подгрузка списка задач в массив для обработки


//функция для отрисовки наших to-do-шек -, перебираем массив, навешиваем HTML верстку на каждый "li" и распределяем по завершенным и нет + публикация на странице
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

        li.querySelector('.todo-complete').addEventListener('click', function () {
            item.completed = !item.completed
            render()
            localStorage.setItem("todoList1", JSON.stringify(toDoData))
        })
        li.querySelector('.todo-remove').addEventListener('click', function () {
            const itemIndex = toDoData.indexOf(item);
            toDoData.splice(itemIndex, 1);

            render();
            localStorage.setItem("todoList1", JSON.stringify(toDoData))

        })

    })

}


todoControl.addEventListener('submit', function (event) {
    event.preventDefault() // Отменяем перезагрузку страницы при САБМИТЕ формы

    const newToDo = {
        text: headerInput.value,
        completed: false

    }

    console.log('1')
    if (headerInput.value === '') {
        alert('Неудача! Введено пустое значение')
    } else {
        toDoData.push(newToDo)
        headerInput.value = ''
    }

    render()

    localStorage.setItem("todoList1", JSON.stringify(toDoData))
})

render()