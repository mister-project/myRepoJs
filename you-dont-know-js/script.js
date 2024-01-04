const lists = document.querySelectorAll('.books')
const books = document.querySelectorAll('.book')
console.log(lists)
console.log(books)

lists[0].prepend(books[1]);
books[3].replaceWith(books[4]);
lists[0].append(books[3]);
lists[0].append(books[5]);
lists[0].append(books[2]);

const img = document.querySelector('body');
img.style.backgroundImage = "url(./image/you-dont-know-js.jpg)"
