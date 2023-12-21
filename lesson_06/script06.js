'use strict';
//alert, confirm, prompt
let randNum;
let userNum;
let answer;
let answer1;
//function getUserNumber() {
    
   
function getRandomNumber() {
      randNum = Math.floor(Math.random() * 100);
      console.log(randNum) 
      userNum = +prompt('Угадай число от 1 до 100');
      
      console.log(userNum);

      function check() {
        if (userNum > randNum) {
            answer = alert('Загадайте число меньше')
             return check1(); 
        } else if (userNum < randNum) {
            answer = alert('Загадайте число больше')
            return check1()  
        } else if (userNum === randNum) {
            answer = alert('Поздравляю, Вы угадали!!!')
            return check1()  
        } else 
        {alert('Введите число!')
          return check1();
      }

      function check1() {
         if(!confirm('Продолжим?')) {
          alert('ИГРА ОКОНЧЕНА!');
         }else{
          return getRandomNumber()
         }
         console.log(check1);
      }
        
      }
      check()
    }

getRandomNumber()


    
// }