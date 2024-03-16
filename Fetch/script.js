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

const sendData = ({
  url,
  data = {},
  method = 'GET'
}) => {
  return fetch(url, {
    method: method,
    body: data,
    headers: {
      'Content-type': 'multipart/form-data',
    },
  }).then(response => response.json())
}

form.addEventListener('submit', (e) => {
  e.preventDefault()

  const data = new FormData(form)

  sendData({
      url: 'https://jsonplaceholder.typicode.com/posts',
      data: data,
      method: 'POST'
    })


    .then(data => {
      console.log(data);
    })
})