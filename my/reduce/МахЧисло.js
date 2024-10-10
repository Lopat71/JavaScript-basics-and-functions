// 4. Нахождение максимального числа
// Дан массив чисел [3, 5, 1, 8, 2]. Используя метод reduce(), найдите максимальное число в массиве.

const numbers = [3, 5, 1, 8, 2];

const MaxNumber = numbers.reduce((accum, number) => {
    return Math.max(accum, number);
}, numbers[0]);

console.log(MaxNumber);
