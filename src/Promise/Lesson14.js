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
    .then((user) => { console.log(user) })


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
        console.log(user)
    })
    .catch((error) => { //if reject
        console.log(error)
    })
    .finally(() => {
        console.log('finish')
    })

//------------------------------------------------------------------------

//Статический метод класса Promise.all([pr1, pr2])

const otherPromise = Promise.all([promise1, promise2]) //otherPromise заресолвится тогда, когда promise1 и promise2 заресолвятся

otherPromise.then((results) => {

    const dataFromGoogle = results[0]
    const dataUserDB = results[1]
    console.log(`${dataFromGoogle} - ${dataUserDB}`);
})
    .catch(() => { console.log('Initialization failed. Try later') })

//Статический метод класса Promise.allSettled([pr1, pr2]), зарезолвится в любом случае(добавляется проверка на наличие элемента массива. Метода catch нет)

const otherPromise2 = Promise.allSettled([promise1, promise2])

otherPromise2.then((results) => {
    const dataFromGoogle = results[0].status === 'fulfilled' ? results[0].value : { data: { vacancies: null } }
    const dataUserDB = results[1].status === 'fulfilled' ? results[1].value : { name: results[1].reason }

    console.log(`${dataFromGoogle.data.vacancies} ${dataUserDB.name}`)
})

//Статический метод Promise.resolve() - возвращает promise, зарезолвленный resolve определенным значение

const resolvedPromise = Promise.resolve(100)
//console.log(resolvedPromise)
resolvedPromise.then((data) => console.log(data))
    .catch((error) => console.log(error))

//Статический метод Promise.rejected() - возвращает promise, зарежектонный reject определненной ошибкой

const rejectedPromise = Promise.reject({ message: 'Some error' })
//console.log(rejectedPromise)

rejectedPromise
    .then((data) => console.log(data))
    .catch((error) => console.warn(error))

//Пример с объектом который делает запрос на сервер

const userAPI = {
    getAllUsers() {
        return Promise.resolve([{ name: 'D' }, { name: 'N' }])
    },
    login(loGin, password) {
        if (loGin !== '123' && password !== '123') {
            return Promise.reject({ message: 'Incorrect Login and password' })
        } else {
            return Promise.resolve({ name: 'Dima', id: 12, avatarURL: '' })
        }
    }
}


const pr = userAPI.getAllUsers()

//pr.then((users) => console.log(users))



usersAPI.loGin('123', '441142')
    .then((data) => { console.log(data) })
    .catch((error) => console.log(error))

//-----------------------------------------------------------------------------------------------------------------------------------------------

//Цепочка then

findUserInDB(1)    //найди юзера с id=1
    .then(user => user.name) // затем возьми у юзера с id=1 имя 
    .then(name => console.log(name)) // затем выведи это имя в консоль

//___________________________________________________________________________________________________________________________________________

axios.get('https://google.com') //запрос на сервер - возвращает промис
    .then(res => res.data) // затем забираем у этого промиса data
    .then((data) => console.log(data)) //затем выводим дату в консоль


//Создадим функцию которая делает запрос на сервер и возвращает объект промис с данными о вакансии

const getVacanciesCountFromGoogle = () => {
    return axios.get('https://google.com')
        .then(res => res.data)
        .then(data => data.vacancies)
}

getVacanciesCountFromGoogle().then(vacancies => console.log(vacancies))

findUserInDB(1)
    .then(user => user.name)
    .then(name => {
        console.log(name);
        return 100
    })
    .then(number => {
        console.log(number)
        return number + 1
    })
    .then(number => {
        console.log(number)
        return number + 1
    })
    .then(number => {
        console.log(number)
        return number + 1
    })

//Пример с возвращаемым промисом

findUserInDB(1)
    .then(user => user.name)
    .then(name => {
        console.log(name)
        return 100;
    })
    .then(number => {
        console.log(number)
        return {value: number + 1}
    })
    .then (obj => {
        console.log(obj.value)
        const promise = Promise.resolve(obj.value + 1) //создается новый промис с зарезолвенным значением
        return promise //возвращает зарезолвенное значение
    })
    .then(number => {
        console.log(number)
        return number + 1
    })
   // > 'Dimych', 100, 101, 102

   //Запрос на сервер найти юзера

   const lastPromise = findUserInDB(1)
   .then(user => {
    console.log(user)
    return user
   })
   .then ((user)=> {
    return findUserInDB(user.friend)
   })
   .then((friend1)=> {
    console.log(friend1)
    return findUserInDB(friend1.friend)
   })
   .then ((friend2)=> {
    return findUserInDB(friend2.friend) //вернется значение зарезолвенное промисом
   })

