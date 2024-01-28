'use strict'

const DomElement = function (selector, height, width, bg, fontSize, text) {
    console.log('DomElement запущен')
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
    this.insText = text;
}

DomElement.prototype.crElement = function () {

    console.log('crElement запущен') //Проверка запуска функции
    const firstSymb = this.selector.charAt(0); //Переменная, содержащая первый символ введенного блока
    const restSymb = this.selector.slice(1); //Переменная со всеми символами введенного блока, кроме первого

    let insContent = document.createElement('p'); // переменная для создания нового элемента

    const bodyInter = document.querySelector('body');
    console.log(bodyInter);

    //Ниже - цикл для выбора значения переменной insContent + добавления разметки (Вставляемый DIV будет классом или ID )

    if (firstSymb === '.') {
        insContent.innerHTML = `<div class="` + restSymb + `">Ваш текст: "` + this.insText + `", а DIV с классом ` + restSymb + ` </div>`

    } else if (firstSymb === '#') {
        insContent.innerHTML = `<div id="` + restSymb + `">Ваш текст: ` + this.insText + `, а DIV  c Идентификатором  ` + restSymb + `</div>`
    }

    //Ниже дополнительная переменная для выделения DIV из результата цикла и добавления новых стилей CSS
    const insStyle = insContent.querySelector('div') //

    bodyInter.append(insContent);


    //Ниже задаю остальные свойства блока DIV с использованием CssText
    insStyle.style.cssText = 'height: ' + this.height + 'px; width: ' + this.width + 'px; background: ' + this.bg + '; font-size: ' + this.fontSize + 'px;'

}


const newObject = new DomElement('#block', 150, 150, 'green', 15, 'первый клон')
newObject.crElement();
console.log(newObject)
const newObject1 = new DomElement('.block', 100, 100, 'red', 15, 'Второй клон')
newObject1.crElement();
console.log(newObject1)