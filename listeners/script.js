//Получение текста из поля
const text = document.getElementById('text')//Получение элемента Input[text]
const btn = document.getElementById('btn')//Получение элемента button
const qv = document.getElementById('square')//Получение элемента квадрат из вертстки
const range = document.getElementById('range')//Получение элемента range
const span = document.getElementById('range-span')//Получение элемента range-span
const circle = document.getElementById('circle')

// Функция для изменения цвета квадрата
const logger = function (event) { 
 
const colorQv = event.target.value;

btn.addEventListener('click', function() {
qv.style.backgroundColor = colorQv

})

}
// Ниже - функция изменения размеров круга
const logger1 = function (event) {
    span.textContent = event.target.value;
    
    circle.style.width = event.target.value + '%';
    circle.style.height = event.target.value + '%';

    
}

text.addEventListener('input', logger);//Исполняемая часть по событию 'input - text'
range.addEventListener('input', logger1);//Исполняемая часть по изменению 'input range'


