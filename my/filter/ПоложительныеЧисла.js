// 3. Фильтрация положительных чисел
// Дан массив чисел. Используя метод filter(), верните массив только с положительными числами.

// const numbers = [-5, 3, 0, -2, 7, -1];
// // Ожидаемый результат: [3, 7]

const numbers = [-5, 3, 0, -2, 7, -1];

const plusNumbers = numbers.filter((num) => num >= 0);

console.log(plusNumbers);
