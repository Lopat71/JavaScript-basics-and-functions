// 7. Проверка числового диапазона
// * Задача: Дан массив чисел [15, 30, 45, 60, 85]. Используя метод every(), проверьте, находятся ли все числа в диапазоне от 10 до 100 включительно.

let numbers = [15, 30, 45, 60, 85];
let validNumbers = numbers.every((num) => num > 10 && num < 100);
console.log(validNumbers);
