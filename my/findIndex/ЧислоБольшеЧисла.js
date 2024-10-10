// 9. Поиск индекса числа больше 50
// Дан массив чисел. Используя метод findIndex(), найдите индекс первого числа, которое больше 50.

// const numbers = [10, 25, 60, 45, 80];
// // Ожидаемый результат: 2

const numbers = [10, 25, 60, 45, 80];

let requiredNumbers = numbers.findIndex((num) => num > 50);

console.log(requiredNumbers);
