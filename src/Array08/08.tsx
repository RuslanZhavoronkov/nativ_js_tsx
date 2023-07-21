// const user = {
//     name: 'Dimych',
//     age: 12,
//     address: {
//         city: {
//             title: 'Minsk'
//         }
//     }
// }


// const user = {
//     'name': 'Dimych',
//     'age': 12,
//     'address': {
//         'city': {
//             'title': 'Minsk'
//         }
//     }
// }
// user['address']['city']['title']
// user.address.city.title

//---------------------------------------------------------------------------------------------------------------------------------------------


const usersO = ['Dimych', 'Natasha', 'Valera', 'Katya']
usersO[0] = 'Dimych'

usersO['map'](e => e.toUpperCase);
usersO.map(e => e.toUpperCase);

//-----------------------------------------------------------------------------------------------------------------------------------------------



//найди юзера с индентификатором = 1
//users[1];

//Добавление нового объекта в объект
let user = {id: 100500, name: 'Igor'}
users[user.id] = user;

users[user.id].name = 'Victor' 

//Удаление юзера
delete users[user.id]



const usersArray = [
    {id:101, name:'Dimych'},
    {id:3232312, name:'Natasha'},
    {id:1212, name:'Valera'},
    {id:1, name:'Katya'}
]

//найди юзера с индентификатором = 1
//usersArray.find(u => u.id === 1);

//Добавление юзера (вероятность дубликата)
//let usersCopy = [...usersArray.filter(), user]
