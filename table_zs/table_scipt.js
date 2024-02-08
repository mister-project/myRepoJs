'use strict'
console.log('работает скрипт обьединения ячеек во 2-м столбце ')

//считаем количество антенн
//Шаг1. выводим все записи чтобы найти дубликаты
const elements = document.querySelectorAll('[class*="ant"]');
console.log(elements);

//Шаг2. Надо преобразовать nodeList в массив 
const array = [];
elements.forEach((y) => {


    array.push(y.className); // сама публикация новых элементов

});

//Шаг3. Удаляем из массива дубли


const uniqArray = new Set(array);
console.log(uniqArray);

//Конец щага3
//Получаем количество уникальных классов (станций)
const lengthArr = uniqArray.size
console.log(lengthArr)

//Цикл для перебора станций и создания отдельных коллекций по каждому классу

for (let j = 1; j < lengthArr + 1; j++) {
    let cl = "ant" + j;
    console.log(cl);
    let elements1 = document.querySelectorAll(`.${cl}`);
    //Определение количества одинаковых ячеек (строк по каждой станции)
    let elemLen = elements1.length;

    const array1 = Array.from(elements1);


    for (let k = 0; k < elemLen; k++) {
        console.log(array1[k]);
        if (k === 0) {
            array1[k].setAttribute('rowspan', `${elemLen}`);

        } else {
            array1[k].remove();
        }

    }

}