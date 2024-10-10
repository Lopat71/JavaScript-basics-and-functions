// 9. Нахождение минимального числа
// Дан массив чисел [10, 5, 8, 1, 6]. Используя метод reduce(), найдите минимальное число в массиве.

const numbers = [10, 5, 8, 1, 6];

const MinNumber = numbers.reduce((accum, num) => {
    return Math.min(accum, num);
}, numbers[0]);

console.log(MinNumber);
