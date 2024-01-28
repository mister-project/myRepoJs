'use strict'
console.log('lesson15')
// 1) Создать функцию-конструктор DomElement, который

//    содержит свойства
//   - selector,
//   - height,
//   - width,
//   - bg,
//   - fontSize
// содержит метод, который создает элемент на странице в зависимости от условия:
// - если строка selector начинается с точки, создаем div с классом
// - если строка selector начинается с решетки # то создаем параграф с id
// пример:
// если передана строка '.block', то функция конструктор создает элемент с class="block"
// если передана строка '#best', то функция конструктор создает элемент с id =best"
// с помощью cssText задавать стили:
//   - высотой - height,
//   - шириной - width,
//   - background - bg
//   - размер текста fontSize
// Внутрь созданного блока записывать любой текст. Метод записи может быть любым.

const DomElement = function (selector) {
    console.log('DomElement')
    selector = '.tr';
    height: 'height';
    width: 'width';
    bg: 'bg';
    FontSize: 'fontSize';

    const crElement = function () {
        console.log('crElement') //Проверка запуска функции
        const firstSymb = selector.charAt(0); //Переменная, содержащая первый символ введенного блока
        const restSymb = selector.slice(1); //Переменная со всеми символами введенного блока, кроме первого
        let insContent = document.querySelector('.content'); // переменная для вывода результата на страницу (привязываемся к классу 'content')

        //Ниже - цикл для выбора значения переменной insContent + добавления разметки (Вставляемый DIV будет классом или ID )

        if (firstSymb === '.') {
            insContent.innerHTML = `<div class="` + restSymb + `">Div с классом ` + restSymb + ` </div>`

        } else if (firstSymb === '#') {
            insContent.innerHTML = `<div id="` + restSymb + `">Div c Идентификатором  ` + restSymb + `</div>`


        }



    }
    crElement()
}

DomElement()