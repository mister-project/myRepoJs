'use srtict'

// const element = document.querySelectorAll('tr.td');
// console.log(this.element);
// const element1 = document.querySelectorAll('table')
// console.log(element1);
// let myTable = document.querySelector("#table");
// let allTds = myTable.querySelectorAll("td");
// let allTrs = myTable.querySelectorAll("tr");
// console.log(myTable);

//считаем количество антенн
//Шаг1. выводим все записи чтобы найти дубликаты
const elements = document.querySelectorAll('[class*="ant"]');
console.log(elements);

//Шаг2. Надо преобразовать nodeList в массив 
const array = [];
elements.forEach((y) => {
    console.log(y.className);

    array.push(y.className); // сама публикация новых элементов
    console.log(array);
});

//Шаг3. Удаляем из массива дубли


const uniqArray = new Set(array);
console.log(uniqArray);

//Конец щага3
//Получаем количество уникальных классов (станций)
const lengthArr = uniqArray.size
console.log(lengthArr)



for (let j = 1; j < lengthArr + 1; j++) {
    let cl = "ant" + j;
    console.log(cl);
    const elements1 = document.getElementsByClassName(cl);
    // elements[i].remove();
    console.log(elements1);
    console.log(elements1.length);


}


// var arr = [1, 2, 2, 3, 4, 5, 5, 5, 6, 7, 7, 8, 9, 10, 10];

// function squash(arr) {
//     var tmp = [];
//     for (var i = 0; i < arr.length; i++) {
//         if (tmp.indexOf(arr[i]) == -1) {
//             tmp.push(arr[i]);
//         }
//     }
//     return tmp;
// }

// console.log(squash(arr));


// console.log(element2.length);