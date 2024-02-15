'use strict'

let content = document.getElementById('content')



// что сейчас
const updateClock = () => {
    // let getTime = getTimeRemaining()
    let now = new Date()
    console.log(`now: ${now}`);

    let today = now.toLocaleString('ru', {
        weekday: 'long'
    });

    let nowAmPm = now.toLocaleTimeString("ru"); // 9:17:25 PM


    // номер дня с начала года

    let hours = now.getHours()




    console.log(`now.getTime(): ${now.getTime()}`);

    let days = Math.floor(now / 1000 / 60 / 60 / 24)
    let balance = days % 4
    console.log(`balance: ${balance}`);
    console.log(`hours: ${hours}`);

    let smena = 'неопределено';
    if ((balance === 0 && hours > 7) || ((balance) === 1 && hours < 8)) {
        smena = ' 2 смена'
    }
    if ((balance === 1 && hours > 7) || ((balance) === 2 && hours < 8)) {
        smena = ' 3 смена'
    }
    if ((balance === 2 && hours > 7) || ((balance) === 3 && hours < 8)) {
        smena = ' 4 смена'
    }
    if ((balance === 3 && hours > 7) || ((balance) === 0 && hours < 8)) {
        smena = ' 1 смена'
    }

    console.log(smena)



    // //добавление разрядов
    content.textContent = `${today} ${nowAmPm}  / ${smena}`
    // timerMinutes.textContent = ('0' + getTime.minutes).slice(-2);
    // timerSeconds.textContent = ('0' + getTime.seconds).slice(-2);

}
//Остановка таймера, если дата просрочена
let idInerval = setInterval(() => {
    updateClock()
}, 1000)

updateClock()