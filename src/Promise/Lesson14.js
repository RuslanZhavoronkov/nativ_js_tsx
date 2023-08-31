const obj1 = {
    name: 'Dimych',
    say(message) {
        console.log(`${message} ${this.name}`);
    }
}

//обращаемся к методу объекта

obj1.say('hello');


//запрос на сервер

const promise1 = axios.get('https://google.com')
promise1.then((data) => {
    console.log(data);
})


//В реальной жизни запрос на сервер пишется так:

axios.get('https://google.com')
.then((data) => {
    console.log(data);
})


//асинхронный запрос в базу данных

const promise2 = findUserInDB(1)
promise2.then((user) => {
    console.log(user);
})


//В реальной жизни запрос на сервер пишется так:

findUserInDB(1)
.then((user)=> {console.log(user)})


console.log(finish)

//если промис не выполнится, то промис зареджектится и выполнится метод catch

const promise3 = findUserInDB(100)
promise3.catch((error) => {
    console.log(error)
})

//Два метода на случай выполнения промиса и ошибки

const promise4 = findUserInDB(100);
promise4
.then((user) => { //if resolve
    console.log (user)
})
.catch((error)=> { //if reject
    console.log (error)
})
.finally(()=> {
    console.log ('finish')
})

//------------------------------------------------------------------------

