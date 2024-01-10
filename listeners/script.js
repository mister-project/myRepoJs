//Получение текста из поля
const text = document.getElementById('text')
console.log(text)

const logger = function (event) {
console.log(event.target.value)
}


//Навешивание события на кнопку
const btn = document.querySelector('#e_btn')
console.log(btn);


text.addEventListener('input', logger)
btn.addEventListener('click', logger)

//Получение исходного цвета квадрата

const qv = document.getElementById('square')
//const colorQv1 = gv.style.backgroundColor
console.log(qv)
const color = window.getComputedStyle(document.getElementById('square')).backgroundColor

console.log(color)
