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

const DomElement = function () {
    console.log('DomElement')
    const selector = '.tr';
    const height = 100;
    const width = 100;
    const bg = prompt('задайте цвет', 'red');
    const fontSize = 10;
    const insText = prompt('введите текст', 'ляля');

    const crElement = function () {
        console.log('crElement') //Проверка запуска функции
        const firstSymb = selector.charAt(0); //Переменная, содержащая первый символ введенного блока
        const restSymb = selector.slice(1); //Переменная со всеми символами введенного блока, кроме первого
        let insContent = document.querySelector('.content'); // переменная для вывода результата на страницу (привязываемся к классу 'content')

        //Ниже - цикл для выбора значения переменной insContent + добавления разметки (Вставляемый DIV будет классом или ID )

        if (firstSymb === '.') {
            insContent.innerHTML = `<div class="` + restSymb + `">Ваш текст: "` + insText + `", а DIV с классом ` + restSymb + ` </div>`

        } else if (firstSymb === '#') {
            insContent.innerHTML = `<div id="` + restSymb + `">Ваш текст: ` + insText + `, а DIV  c Идентификатором  ` + restSymb + `</div>`
        }

        //Ниже дополнительная переменная для выделения DIV из результата цикла и добавления новых стилей CSS
        const insStyle = insContent.querySelector('div') //


        //Ниже задаю остальные свойства блока DIV с использованием CssText
        insStyle.style.cssText = 'height: ' + height + 'px; width: ' + width + 'px; background: ' + bg + '; font-size: ' + fontSize + 'px;'

    }
    crElement()

}

DomElement()