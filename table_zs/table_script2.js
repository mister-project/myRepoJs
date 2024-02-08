'use strict'



let sortedRows = Array.from(table.rows)
  //Ниже строка для исключения заголовка из расчетов
  // .slice(1)
  .sort((rowA, rowB, ) => rowA.cells[0].innerHTML > rowB.cells[0].innerHTML && rowA.cells[1].innerHTML > rowB.cells[1].innerHTML ? 1 : -1);


console.log(sortedRows)


table.tBodies[0].append(...sortedRows);