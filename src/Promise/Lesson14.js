import { get } from "http";

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
        return { value: number + 1 }
    })
    .then(obj => {
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
    .then((user) => {
        return findUserInDB(user.friend)
    })
    .then((friend1) => {
        console.log(friend1)
        return findUserInDB(friend1.friend)
    })
    .then((friend2) => {
        return findUserInDB(friend2.friend) //вернется значение зарезолвенное промисом
    })

//_________ASYNC/AWAIT_____________________________________________________________


function getNumber() {
    //return Promise.resolve(Math.random())

    const promise = new Promise((resolve, reject) => {
        //reject('some error') //промис зареджектится и then выполняться не будет
        setTimeout(() => {
            resolve(Math.random())
        }, 2000)

    })
    return promise
}

// console.log(getNumber())

getNumber().then(number => {
    console.log(number + 1);
})



//Записать в local storage значение

const repo = {
    save(data) {
        try {
            localStorage.setItem('some key', JSON.stringify(data))
        } catch (error) {
            return false
        }
        return true;
    },
    saveAsync(data) {
        const promise = new Promise((resolve, reject) => {
            try {
                localStorage.setItem('some key', JSON.stringify(data))
                resolve()
            } catch (error) {
                reject(error)
            }
        })

        return promise;
    }
}

const result = repo.save({ name: 'IT KAMASUTRA' })
result ? console.log('SAVED') : console.warn('NOT SAVED')


const run = async () => {
    await repo.saveAsync({ name: 'IT KAMASUTRA' })
    console.log('saved')
}


//callback hell
setTimeout(() => {
    console.log(1)
    setTimeout(() => {
        console.log(2)
        setTimeout(() => { console.log(3) }, 1000)
    }, 1000)
}, 1000)



function wait(ms) {
    return new Promise((resolve) => {
        setTimeout(() => { resolve() }, ms)
    })
}

async function run() {
    await wait(1000)
    console.log(1)
    await wait(1000)
    console.log(2)
    await wait(1000)
    console.log(3)
}

run()




// Объект  axios

const axios = {
    _fake(url, data) {
        return new Promise((resolve) => {
            setTimeout(() => {
                let responseData = {
                    text: `${url} loves you`
                };
                if (url.indexOf('it-kamasutra') > 0) {
                    responseData = {
                        requestedCount: data.count,
                        message: 'we will prepare students for you'
                    }
                } else if (url.indexOf('google') > 0) {
                    responseData = {
                        vacancies: 12
                    }
                } else if (url.indexOf('microsoft') > 0) {
                    responseData = {
                        vacancies: 21
                    }
                }

                resolve({
                    request: {},
                    status: 200,
                    headers: {},
                    config: {},
                    data: responseData
                })
            }, randomIntFromInterval(1, 5) * 1000)
        })
    }
}


//Функция findUserInDB

// const findUserInDB = (id) => {
//     const users = [{ id: 1, name: 'Dimych', friend: 3 }, { id: 2, name: 'Sveta', friend: null }, { id: 3, name: 'Valera', friend: 2 }]
//     return new Promise((res, rej) => {
//         setTimeout(() => {
//             let user = users.find(u => u.id == id);
//             user == null ? rej('user not found') : res(user)
//         }, randomIntFromInterval(500, 1500))
//     })
// }

// function randomIntFromInterval(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) + min)
// }





// //Функция findUserInDB

// const findUserInDB = (id) => {
//     const users = [{ id: 1, name: 'Dimych', friend: 4 }, { id: 2, name: 'Sveta', friend: null }, { id: 3, name: 'Valera', friend: 2 }]
//     return new Promise((res, rej) => {
//         setTimeout(() => {
//             let user = users.find(u => u.id == id);
//             user == null ? rej('user not found') : res(user)
//         }, randomIntFromInterval(500, 1500))
//     })
// }

// function randomIntFromInterval(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) + min)
// }




findUserInDB(1)
    .then(user => {
        console.log(user.name)
        return user.friend
    })
    .then(friendId => findUserInDB(friendId))
    .catch(error => { return { name: 'Friend Bot', friend: 3 } })
    .then(friend1 => {
        console.log(friend1.name)
        return friend1.friend
    })
    .then(friendId => {
        findUserInDB(friendId)
    })
    .then(friend2 => console.log(friend2.name))
    .catch(error => console.log(error))





//Функция findUserInDB

const findUserInDB = (id) => {
    const users = [{ id: 1, name: 'Dimych', friend: 4 }, { id: 2, name: 'Sveta', friend: null }, { id: 3, name: 'Valera', friend: 2 }]
    return new Promise((res, rej) => {
        setTimeout(() => {
            let user = users.find(u => u.id == id);
            user == null ? rej('user not found') : res(user)
        }, randomIntFromInterval(500, 1500))
    })
}

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}





const run = async () => {
    try {
        let user = await findUserInDB(1)
        console.log(user.name)
        let friend1;
        try{
            let friend1 = await findUserInDB(user.friend) //возвращается зарезолвенное промисом значение
            console.log(friend1.name)
        } catch (error){
            let friend1 = { name: 'Friend Bot', friend:1}
            console.log(friend1.name)
        }
        let friend2 = await findUserInDB(friend1.friend)
        console.log(`${friend2.name} ${user.name}`)
    } catch (error) {
        console.log(error)
    }

}

run()


//_________________Await not Promise___________________________________

const api = {
    save() {

    },
    read(){
        {name:'it-kamasutra'}
        }
    }


const run = async()=>{
    await api.save()
    console.log('SAVED')
    let data = await api.read()
    console.log('read: ', data)
}

run()



//2 способ

const api1 = {
    save() {

    },
    read(){
        
        return new Promise((resolve)=> {
            resolve ({name:'it-kamasutra'})
        })
    }
}

const run = async()=>{
    await api1.save()
    console.log('SAVED')
    let data = await api1.read()
    console.log('read: ', data)
}

run()

//3ий способ

const api2 = {
    save() {

    },
    read(){
        
        return Promise.resolve({name:'it-kamasutra'})
        }
    }


const run = async()=>{
    await api2.save()
    console.log('SAVED')
    let data = await api2.read()
    console.log('read: ', data)
}

run()

//4ый способ(любая асинхронная функция возвращает промис)

const api3 = {
    async save() {
//функция save возвращает промис который ничем ни резолвится
    },
    async read(){
        //функция read возвращает промис который зарезолвился {name:'it-kamasutra'}
        return {name:'it-kamasutra'}
        }
    }


const run = async()=>{
    await api3.save()
    console.log('SAVED')
    let data = await api3.read()
    console.log('read: ', data)
}

run()