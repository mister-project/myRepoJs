'use strict';
//Определение переменных
//Для случайного числа
let randNum;
//Для числа пользователя
let userNum;


// Определение функций

// Задаю функцию для генерации нового случайного числа и запроса числа от пользователя 
   
function getRandomNumber() {
      randNum = Math.floor(Math.random() * 100);
      console.log(randNum) 
      userNum = +prompt('Угадай число от 1 до 100');
      
      console.log(userNum);
// Задаю функцию (ЗАМЫКАНИЕ с getRandomNumber() ) для сравнения двух переменных let randNum и let userNum
      function check() {
        //console.dir(check())
        if (userNum > randNum) {
            alert('Загадайте число меньше')
             return check1() };

        if (userNum < randNum) {
            alert('Загадайте число больше')
            return check1() };
        if (userNum === randNum) {
            alert('Поздравляю, Вы угадали!!!')
            return check1(); 
        } else {
        alert('Введите число!')
          return check1();
         
      }
      //Задаю функцию - ЗАМЫКАНИЕ check() для выбора вариантов (через окно ДА/НЕТ) - начать заново (запуск getRandomNumber()) или нет. Если нет - появляется сообщение - ИГРА

      function check1() {
       
         if(!confirm('Продолжим?')) {
          alert('ИГРА ОКОНЧЕНА!');
         }else{
          return getRandomNumber()
         }
         //console.log(check1);
      }
        
      }
      check()
    }

getRandomNumber()


