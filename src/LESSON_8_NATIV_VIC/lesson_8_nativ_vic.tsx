// 1. Функция sum принимает параметром целые положительные
// числа (неопределённое кол-во) и возвращает их сумму (rest).

export function sum(...nums: Array<number>): number {

    const newArray = [...nums];
    let result = 0
    for (let i = 0; i < newArray.length; i++) {
        result += newArray[i];
    }

    return result
}


// 2. Функция getTriangleType принимает три параметра:
// длины сторон треугольника.
// Функция должна возвращать:
//  - "10", если треугольник равносторонний,
//  - "01", если треугольник равнобедренный,
//  - "11", если треугольник обычный,
//  - "00", если такого треугольника не существует.

export function getTriangleType(a: number, b: number, c: number): string {

    return (
        (a + b) <= c || (b + c) <= a || (a + c) <= b ? '00'
            : a === b && b === c ? '10'
                : a === b || b === c || a === c && (a + b) > c && (b + c) > a && (a + c) > b ? '01' : '11'
    )
}


//...здесь пишем код.
// В return стоит "заглушка", чтоб typescript не ругался
//return ""



// // 3. Функция getSum принимает параметром целое число и возвращает
// // сумму цифр этого числа

export function getSum(number: number): number {

    let newArray = String(number).split('');
    let result = 0;
    for (let i = 0; i < newArray.length; i++) {
        result += Number(newArray[i]);
    }

    return result;
}


// // 4. Функция isEvenIndexSumGreater принимает  параметром массив чисел.
// // Если сумма чисел с чётными ИНДЕКСАМИ!!! (0 как чётный индекс) больше
// // суммы чисел с нечётными ИНДЕКСАМИ!!!, то функция возвращает true.
// // В противном случае - false.


export const isEvenIndexSumGreater = (arr: Array<number>): boolean => {
    
    let sumEven = 0;
    let sumOdd = 0;
    for (let i = 1; i < arr.length; i++) {
        i % 2 === 0 ? sumEven += (arr[0] + arr[i]) : sumOdd += arr[i]
    }
    return sumEven > sumOdd
}
// В return стоит "заглушка", чтоб typescript не ругался



// // 5. Функция getSquarePositiveIntegers принимает параметром массив чисел и возвращает новый массив.
// // Новый массив состоит из квадратов целых положительных чисел, котрые являются элементами исходгого массива.
// // Исходный массив не мутирует.


export function getSquarePositiveIntegers(array: Array<number>): Array<number> {

    return array.filter(el => Number.isInteger(el) && el > 0).map(el => el * el)
}



// // 6. Функция принимает параметром целое не отрицательное число N и возвращает сумму всех чисел от 0 до N включительно
// // Попробуйте реализовать функцию без использования перебирающих методов.

//1. С помощью цикла for
// export function sumFirstNumbers(N: number): number {
//     // let result = 0;
//     // for (let i = 0; i <= N; i++) {
//     //     result += i;
//     // }
//     // return result;
//   }

// 2. По формуле
export function sumFirstNumbers(N: number): number {

    return N * (N + 1) / 2
}

// //3. Через рекурсию
// export function sumFirstNumbers(N: number): number {
//    return N === 1 ? 1 : N + sumFirstNumbers(N - 1)
// }

// // ...и "лапку" вверх!!!!


// // Д.З.:
// // 7. Функция-банкомат принимает параметром целое натуральное число (сумму).
// // Возвращает массив с наименьшим количеством купюр, которыми можно выдать эту
// // сумму. Доступны банкноты следующих номиналов:
// // const banknotes = [1000, 500, 100, 50, 20, 10, 5, 2, 1].
// // Считаем, что количество банкнот каждого номинала не ограничено


export function getBanknoteList(amountOfMoney: number): Array<number> {

    const banknotes = [1000, 500, 200, 100, 50, 20, 10, 5, 2, 1];
    const result = [];

    for (let i = 0; i < banknotes.length; i++) {
        while (amountOfMoney >= banknotes[i]) {
            result.push(banknotes[i]);
            amountOfMoney -= banknotes[i];
        }
    }
    return result
}


//     for (const banknote of banknotes) {
//       while (amountOfMoney >= banknote) {
//         result.push(banknote);
//         amountOfMoney -= banknote;
//       }
// }
// return result