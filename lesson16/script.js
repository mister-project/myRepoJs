'use strict'
console.log('lesson16');
// //1) Два класса, First и Second, Second наследует от First .
// 2) В First есть метод hello - он печатает в консоль "Привет я метод родителя!".
// 3) Нужно написать в Second метод hello, чтоб он сначала вызывал метод hello из First, а потом сразу печатал в консоль "А я наследуемый метод!"
class First {
    constructor() {
        First.hello()
    }
    static hello() {
        console.log('Привет я метод родителя!')
    }
}
//console.log(First.hello())

class Second extends First {
    // constructor() {

    // }

    hello() {
        First.hello();

        console.log('А я наследуемый метод')
    }


}
const second = new Second()
second.hello()
// console.log(second1)
// second1.hello()
//console.log(Second.hello())