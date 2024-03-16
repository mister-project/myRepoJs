// fetch('https://jsonplaceholder.typicode.com/posts', {
//     method: 'POST',
//     body: JSON.stringify({
//       title: 'foo',
//       body: 'bar',
//       userId: 1,
//     }),
//     headers: {
//       'Content-type': 'application/json; charset=UTF-8',
//     },
//   })
//   .then(response => response.json())
//   .then(data => {
//     console.log(data)
//   })
//   .catch(error => {
//     console.log(error);
//   })

const form = document.getElementById('form')
const username = document.getElementById('username')
const pass = document.getElementById('password')

const sendData = (url, data) => {
  return fetch(url, {
    method: 'POST',
    body: data,
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  }).then(response => response.json())
}

form.addEventListener('submit', (e) => {
  e.preventDefault()

  const user = {
    login: username.value,
    password: pass.value
  }

  sendData('https://jsonplaceholder.typicode.com/posts', JSON.stringify(user))


    .then(data => {
      console.log(data);
    })
})