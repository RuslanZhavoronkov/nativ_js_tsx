import { CityType } from "./02_02";

//Стартовые данные
let city: CityType;

//Функция beforeEach для переинициализации значений
beforeEach(() => {
  city = {
    title: "New York",
    houses: [
      {
        buildedAt: 2012,
        repaired: false,
        address: { number: 100, street: { title: "White street" } },
      },
      {
        buildedAt: 2008,
        repaired: false,
        address: { number: 100, street: { title: "Happy street" } },
      },
      {
        buildedAt: 2020,
        repaired: false,
        address: { number: 100, street: { title: "White street" } },
      },
    ],
    govermentBuildings: [],
    citizensNumber: 1000000,
  };
});

//01.Создадим тип CityType
//02. Заполним объект city, чтобы тесты ниже прошли

test("test city should contains 3 houses", () => {
  expect(city.houses.length).toBe(3);

  expect(city.houses[0].buildedAt).toBe(2012);
  expect(city.houses[0].repaired).toBe(false);
  expect(city.houses[0].address.number).toBe(100);
  expect(city.houses[0].address.street.title).toBe("Wheet street");
});

//01.Дополним тип GovermentBuildingType2
//02. Заполните объект city, чтобы тесты ниже прошли

test.skip("test city should contains hospital and fire station", () => {});
