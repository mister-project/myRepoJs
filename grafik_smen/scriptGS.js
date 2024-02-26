'use strict'
//Получаем контейнер из HTML и укладываем в переменную
let content = document.getElementById('content')


const updateClock = () => {
    // let getTime = getTimeRemaining()
    //Получаем текущую дату и время
    let now = new Date()
    // console.log(`now: ${now}`);
    // Получаем день недели
    let today = now.toLocaleString('ru', {
        weekday: 'long'
    });
    //Получаем текущее время
    let nowAmPm = now.toLocaleTimeString("ru"); // 9:17:25 PM

    //Получаем текущий час, день, месяц , год

    let hours = now.getHours(); //час нужен для вычисления номера смены
    let day = now.getDate();
    let month = now.getMonth() + 1;
    let year = now.getFullYear();


    //количество миллисекунд, прошедших с 1 января 1970 года
    // console.log(`now.getTime(): ${now.getTime()}`);

    let days = Math.floor(now.getTime() / 1000 / 60 / 60 / 24)
    let balance = days % 4 //Получение остатка от деления для определения номера смены
    // console.log(`balance: ${balance}`);
    // console.log(`hours: ${hours}`);

    let smena = 'неопределено';
    if ((balance === 0 && hours > 7) || ((balance) === 1 && hours < 8)) {
        smena = ' смена №2'
    }
    if ((balance === 1 && hours > 7) || ((balance) === 2 && hours < 8)) {
        smena = ' смена №3'
    }
    if ((balance === 2 && hours > 7) || ((balance) === 3 && hours < 8)) {
        smena = ' смена №4'
    }
    if ((balance === 3 && hours > 7) || ((balance) === 0 && hours < 8)) {
        smena = ' смена №1'
    }

    // console.log(smena)

    // //добавление разрядов
    content.textContent = `${('0' + day).slice(-2)}.${('0' + month).slice(-2)}.${year} / ${today} ${nowAmPm}  / ${smena}`

}

//Определение интервала обновления
let idInerval = setInterval(() => {
    updateClock()
}, 1000)

//одноразовое обновление штампа времени (при остановке часов)
// updateClock()

//Остановка часов (обновления) через 5 секунд после запуска
// setTimeout(() => {
//     clearInterval(idInerval);
//     alert('stop');
// }, 5000)