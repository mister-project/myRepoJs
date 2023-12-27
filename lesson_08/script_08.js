'use strict';
//объявление переменных


const appData = {
    title: '',
    screens: '',
    screenPrice: 0,
    adaptive: true,
    rollback: 15,
    allServicePrices: 0,
    fullPrice: 0,
    servicePercentPrice: 0,
    services: {},
   
    //num: 0,
    
   // sum: 0,
    
    //price: 0,
    rollbackMessage: 0,
    start: function () {
        appData.asking()
        appData.getallServicePrices()
        appData.getFullPrice();
        appData.getServicePercentPrices();
        appData.getTitle()
        appData.getRollbackMessage(appData.fullPrice)
       
        appData.logger()                   
      
      },
         //isNumber()) функция проверки на чило
    isNumber: function(num) {
        return !isNaN(parseFloat(num) && isFinite(num))
        
        },

    asking: function() {
        let price = 0;
        appData.title = prompt('Как назывется ваш проект?', "Калькулятор верстки");
        appData.screens = prompt('Какие типы экранов нужно разработать? (через запятую, пожалуйста)', "Простые, сложные");
       
        do {appData.screenPrice = +prompt('Сколько будет стоить данная работа (в руб.)?', 31000).trim()
        } while (!appData.isNumber(appData.screenPrice));
//Начало цикла for
        for (let i = 0; i < 2; i++) {
            let name = prompt('Какой дополнительный тип услуги нужен?', 'услуга1')    
            
             
            do {
            
            price = prompt('Сколько это будет стоить (руб.)?', 4500);   
            } while (!appData.isNumber(price)) {
               // console.log(sum);  
               
               appData.services[name] = +price
            }       
            
          
           
        }
       
           
        appData.adaptive = confirm('Нужен ли адаптив на сайте? (выберите нужную кнопку)');
        
    },
//В названии проекта удаление пробелов + отделение первой буквы, превращение в заглавную и присоединении остальной части названия проекта
    getTitle: function() {
        appData.title = ((appData.title.trimStart()).toUpperCase()).slice(0,1) + appData.title.trimStart().toLowerCase().substring(1)
        
      },
   
    //метод - цикл для ввода и валидации доп. услуг 
    getallServicePrices: function() {
             
        for(let key in appData.services){
            appData.allServicePrices += appData.services[key]
            //вывод в консоль содержания обьекта getallServicePrices
           // console.log("Ключ: " + key + " значение: " + appData.services[key])
        }          
                
           
        },
      //метод для сложения итоговой стоимости (без отката)
      getFullPrice: function() {
        appData.fullPrice = appData.screenPrice + appData.allServicePrices;
      },

      //метод подсчета стоимости за вычетом отката
      getServicePercentPrices: function() {
        appData.servicePercentPrice = appData.fullPrice - (appData.fullPrice * (appData.rollback / 100))
    },
    // Расчет скидки в зависимости от суммы
    getRollbackMessage: function(price) {
        switch (true) {
            case price > 30000:
                appData.rollbackMessage = 'Даем скидку 10%';
                break;
            case 15000 < price && price <= 30000:
                appData.rollbackMessage = 'Даем скидку 5%';
                break;
            case 0 < price && price <= 15000:
                appData.rollbackMessage = 'Скидка не предусмотрена';
                break;
            case price  <= 0:
                appData.rollbackMessage = 'Что-то пошло не так';
                break;
        }
        
    },  

    logger: function () {
        for (const key in appData) {
          //вывод в консоль содержания обьека appData
            //console.log("Ключ: " + key + " значение: " + appData[key]);
        }
      },
    
      // --Блок функционала--
     
    };
    
   
 //КОНЕЦ ОБЬЕКТА appData    
  

// функционал

appData.start();      


//блок вывода(мусор)

console.log(appData.fullPrice);
console.log(appData.servicePercentPrice);




