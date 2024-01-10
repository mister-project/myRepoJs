//Получение текста из поля
const text = document.getElementById('text')//Получение элемента Input[text]
const btn = document.getElementById('btn')//Получение элемента button
const qv = document.getElementById('square')//Получение элемента квадрат из вертстки


const logger = function (event) {
const colorQv = event.target.value;

btn.addEventListener('click', function() {
qv.style.backgroundColor = colorQv
})

}

text.addEventListener('input', logger);

