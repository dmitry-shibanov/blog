import axios from 'axios';


const singleAxios = axios.create({
    baseURL: "", headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token'),
        'Access-Control-Allow-Methods': 'POST, GET, DELETE, PUT'
    },
})
// Authorization: 'Bearer ' + token
// axios.post('https://example.com/postSomething', {
//  email: varEmail, //varEmail is a variable which holds the email
//  password: varPassword
// },
// {
//   headers: {
//     Authorization: 'Bearer ' + varToken
//   }
// })
// axios({
//     method: 'post', //you can set what request you want to be
//     url: 'https://example.com/request',
//     data: {id: varID},
//     headers: {
//       Authorization: 'Bearer ' + varToken
//     }
//   })
export default singleAxios;