// 6. Поиск индекса элемента, значение которого равно индексу
// Дан массив чисел. Используя метод findIndex(), найдите индекс первого элемента, у которого значение равно индексу.

// const numbers = [1, 3, 2, 4, 5];
// // Ожидаемый результат: 2

const numbers = [1, 3, 2, 4, 5];

let requiredNumber = numbers.findIndex((num, index) => num === index);

console.log(requiredNumber);


