const lists = document.querySelectorAll('.books') //вывод списков
const books = document.querySelectorAll('.book') //вывод книг одним списком элементов
const img = document.querySelector('body') // картинка заднего фона
const titleBooks = document.querySelectorAll('h2') //вывод заголовков книг в список элементов


// п.1 Восстанавливаю порядок книг
lists[0].prepend(books[1]);
books[3].replaceWith(books[4]);
lists[0].append(books[3]);
lists[0].append(books[5]);
lists[0].append(books[2]);

// п.2 меняю картинку заднего фона

img.style.backgroundImage = "url(./image/you-dont-know-js.jpg)"

// п. 3 исправляю заголовок 3-й книги
titleBooks[4].innerHTML = '<a href="https://github.com/azat-io/you-dont-know-js-ru/blob/master/this%20%26%20object%20prototypes/README.md#you-dont-know-js-this--object-prototypes" target="_blank">Книга 3. this и Прототипы Объектов</a>'

//мусор
console.log(lists)
console.log(books)
console.log(img)
console.log(titleBooks)