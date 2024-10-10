// Задача 7: Проверка наличия взрослых
// Условие: У вас есть массив объектов с информацией о возрасте:

// const people = [
//   { name: "John", age: 17 },
//   { name: "Jane", age: 19 },
//   { name: "Mary", age: 15 }
// ];
// Задание: Напишите функцию, которая проверяет, есть ли в массиве хотя бы один взрослый (возраст 18 и старше).

const people = [
    { name: "John", age: 17 },
    { name: "Jane", age: 19 },
    { name: "Mary", age: 15 },
];

function requaredPeople(arr) {
    return arr.some((user) => user.age > 18);
}
let result = requaredPeople(people);
console.log(result);
