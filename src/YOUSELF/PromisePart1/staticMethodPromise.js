//static method
//1.resolve
const resolvedPromise = Promise.resolve(100); //возвращает зарезолвленный промис с фейковым значение 100
//2.reject
const rejectedPromise = Promise.reject([{message: "Some error"}]); //возвращает зережектнутый промис со значением
//3.all
const resultAllPromise = Promise.all([promise1, promise2]); //выполняется когда два промиса зарезолвятся
//4.allSettled
const resultAllSettled = Promise.allSettled([promise1, promise2]); //возвращает зарезолвленные/зареджектнутые промисы с с объектами со свойствами состояния промисов

//create new Promise
const promise = new Promise((resolve, reject) => {
  //Функция констрруктор принимает две функции resolve и reject
  resolve(Marh.random());
});

//local storage
const repo = {
  save(data) {
    try {
      localStorage.setItem("some key", JSON.stringify(data));
    } catch (error) {
      return false;
    }
    return true;
  },
  //async save
  saveAsync(data) {
    const promise = new Promise((resolve, reject) => {
      try {
        localStorage.setItem("some key", JSON.stringify(data));
        resolve();
      } catch (error) {
        reject(error);
      }
    });
    return promise;
  },
  read () {
    return JSON.parse(localStorage.getItem('some key'))
  },
  //async read
  readAsync() {
    return new Promise((resolve, reject)=> {
    const data = localStorage.getItem('some key')
    if (!data) {
    resolve(null)
    } else {
        resolve(JSON.parse(data))
    }
})
  }
};


//not async save
const result = repo.save({name: "Dimych"});
const promiseOutSide = repo.saveAsync({name: "IT-KAMASUTRA"});
promiseOutSide
  .then(() => {
    console.log("SAVED");
  })
  .catch(() => {
    console.log("NOT SAVED");
  });

// use await

const run = async() => {
    const response = await repo.saveAsync()
    console.log('SAVED')

    const data = await repo.readAsync()
    console.log(data)
}

const wait = (time) => {
    return new Promise((resolve, reject) => {
        setTimeout(()=> {resolve()}, time)
    })
}