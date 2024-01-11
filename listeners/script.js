//Получение текста из поля
const text = document.getElementById('text')//Получение элемента Input[text]
const btn = document.getElementById('btn')//Получение элемента button
const qv = document.getElementById('square')//Получение элемента квадрат из вертстки
const range = document.getElementById('range')//Получение элемента range
const span = document.getElementById('range-span')//Получение элемента range-span
const circle = document.getElementById('circle')
const eBtn = document.getElementById('e_btn')
// Функция для изменения цвета квадрата
const logger = function (event) { 
 
const colorQv = event.target.value;

btn.addEventListener('click', function() {
qv.style.backgroundColor = colorQv

})

}
//Ур 11 - п.2 - Кнопка в круге - style="display: none"
eBtn.style.display = "none";
// Ниже - функция изменения размеров круга
const logger1 = function (event) {
    span.textContent = event.target.value;
    
    circle.style.width = event.target.value + '%';
    circle.style.height = event.target.value + '%';

    
}

text.addEventListener('input', logger);//Ур11 п.1 -Исполняемая часть по событию 'input - text'
range.addEventListener('input', logger1);//Ур11 п.3 - Исполняемая часть по изменению 'input range'

console.log(eBtn.style.display)
//<button id="e_btn" style="display: none">Жмяк</button>