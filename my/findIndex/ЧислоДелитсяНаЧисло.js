// 4. Поиск индекса числа, которое делится на 3
// Дан массив чисел. Используя метод findIndex(), найдите индекс первого числа, которое делится на 3 без остатка.

// const numbers = [1, 4, 7, 9, 12];
// // Ожидаемый результат: 3

const numbers = [1, 4, 7, 9, 12];

let requiredNumber = numbers.findIndex((num) => num % 3 === 0);

console.log(requiredNumber);
