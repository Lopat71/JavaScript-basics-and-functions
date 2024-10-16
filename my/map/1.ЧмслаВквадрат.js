// map()
// Метод map() создает новый массив, в котором каждый элемент является результатом функции, примененной к элементу исходного массива.

// const newArray = array.map(function(element, index, array) {
//     return выражение;
// });

// 1. Возведение чисел в квадрат
// Дан массив чисел [1, 2, 3, 4, 5]. Используя метод map(), создайте новый массив, где каждый элемент — это квадрат исходного числа.

const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map((num) => num ** 2);

console.log(squares);
