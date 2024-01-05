const lists = document.querySelectorAll('.books')
const books = document.querySelectorAll('.book')
const targets = document.querySelectorAll('h2')
const thirstBook = '<a href="https://github.com/azat-io/you-dont-know-js-ru/blob/master/this%20%26%20object%20prototypes/README.md#you-dont-know-js-this--object-prototypes" target="_blank">Книга 3. this и Прототипы Объектов</a>'

console.log(lists)
console.log(books)
console.log(targets)

lists[0].prepend(books[1]);
books[3].replaceWith(books[4]);
lists[0].append(books[3]);
lists[0].append(books[5]);
lists[0].append(books[2]);

const img = document.querySelector('body');
img.style.backgroundImage = "url(./image/you-dont-know-js.jpg)"


targets[4].innerHTML = '<a href="https://github.com/azat-io/you-dont-know-js-ru/blob/master/this%20%26%20object%20prototypes/README.md#you-dont-know-js-this--object-prototypes" target="_blank">Книга 3. this и Прототипы Объектов</a>'

console.log(thirstBook)
