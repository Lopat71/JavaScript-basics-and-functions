// 9. Удаление последнего элемента массива объектов
// * Задача: Дан массив объектов:

// const cars = [
//   {model: 'Tesla', year: 2020},
//   {model: 'BMW', year: 2018},
//   {model: 'Audi', year: 2019}
// ];
// Используя метод pop(), удалите последний объект и выведите его свойства (модель и год) в консоль.

const cars = [
    { model: "Tesla", year: 2020 },
    { model: "BMW", year: 2018 },
    { model: "Audi", year: 2019 },
];

let car = cars.pop();

console.log(car);
