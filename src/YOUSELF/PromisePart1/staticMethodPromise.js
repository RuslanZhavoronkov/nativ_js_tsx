//static method
//1.resolve
const resolvedPromise = Promise.resolve(100) //возвращает зарезолвленный промис с фейковым значение 100
//2.reject
const rejectedPromise = Promise.reject([{message: 'Some error'}]) //возвращает зережектнутый промис со значением
//3.all
const resultAllPromise = Promise.all([promise1, promise2]) //выполняется когда два промиса зарезолвятся
//4.allSettled
const resultAllSettled = Promise.allSettled([promise1, promise2])//возвращает зарезолвленные/зареджектнутые промисы с с объектами со свойствами состояния промисов