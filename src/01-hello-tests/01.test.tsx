import { mult, splitIntoWords, sum } from "./01";


let a:number;
let b:number;
let c:number;

//перед каждым тестом присвой переменным значения
beforeEach(()=>{
a = 1;
b = 2;
c = 3;
})

//Протестируем функцию sum
test("sum should be correct", () => {
  //Создаем исходные данные(Data)
 

  //Action(действия которые мы выполняем)
  const result1 = sum(a, b);
  a=100;
  const result2 = sum(a, b);

  //expect result(ожидаем получить результат)
  expect(result1).toBe(3);
  expect(result2).toBe(102);
});

//Протестируем функцию mult
test("multiply should be correct", () => {
  //Создаем исходные данные(Data)
  const a = 1;
  const b = 2;
  const c = 3;

  //Action(действия которые мы выполняем)
  const result1 = mult(a, b);
  const result2 = mult(b, c);

  //expect result(ожидаем получить результат)
  expect(result1).toBe(2);
  expect(result2).toBe(6);
});

//Протестируем функцию splitIntoWords
test("splitting into words should be correct", () => {
  //1.Data(Создаем исходные данные)
  const sent1 = "Hello my friend!";
  const sent2 = "JS - the best  programming language.";

  //2.Action(действия которые мы выполняем)
  const result1 = splitIntoWords(sent1);
  const result2 = splitIntoWords(sent2);

  //3.Expect result1(ожидаем получить результат)
  expect(result1.length).toBe(3);
  expect(result1[0]).toBe('hello');
  expect(result1[1]).toBe('my');
  expect(result1[2]).toBe('friend');

  //Expect result2(ожидаем получить результат)
  expect(result1.length).toBe(5);
  expect(result2[0]).toBe('js');
  expect(result2[1]).toBe('the');
  expect(result2[2]).toBe('best');
  expect(result2[3]).toBe('programming');
  expect(result2[4]).toBe('language');
});
