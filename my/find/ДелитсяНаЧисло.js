// 4. Поиск первого числа, которое делится на 3
// Дан массив чисел. Используя метод find(), найдите первое число, которое делится на 3 без остатка.

// const numbers = [1, 4, 7, 9, 12];
// // Ожидаемый результат: 9

const numbers = [1, 4, 7, 9, 12];
let okNumber = numbers.find((num) => num % 3 === 0);

console.log(okNumber);
