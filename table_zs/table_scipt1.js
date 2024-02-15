'use strict'
console.log('работает скрипт обьединения ячеек в 1-м столбце ')

//считаем количество КА
//Шаг1. выводим все записи в массив, чтобы найти дубликаты
//Шаг1. выводим все записи чтобы найти дубликаты
const elementsCol1 = document.querySelectorAll('[class*="ka"]');
console.log(elementsCol1);

//Шаг2. Надо преобразовать nodeList в массив 
const arrayCol1 = [];
elementsCol1.forEach((y) => {


    arrayCol1.push(y.className); // сама публикация новых элементов

});



//Шаг3. Удаляем из массива дубли


const uniqArrayCol1 = new Set(arrayCol1);
console.log(uniqArrayCol1);

//Конец щага3
//Получаем количество уникальных классов (КА)
const lengthArrCol1 = uniqArrayCol1.size
console.log(lengthArrCol1)

//Цикл для перебора станций и создания отдельных коллекций по каждому классу

for (let j = 1; j < lengthArrCol1 + 1; j++) {
    let clCol1 = "ka" + j;
    console.log(clCol1);
    let elements1Col1 = document.querySelectorAll(`.${clCol1}`);
    //Определение количества одинаковых ячеек (строк по каждой станции)
    let elemLen = elements1Col1.length;

    const array1Col1 = Array.from(elements1Col1);


    for (let k = 0; k < elemLen; k++) {
        console.log(array1Col1[k]);
        if (k === 0) {
            array1Col1[k].setAttribute('rowspan', `${elemLen}`);

        } else {
            array1Col1[k].remove();
        }

    }

}