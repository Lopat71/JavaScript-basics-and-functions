// 2. Произведение чисел в массиве
// Дан массив чисел [1, 2, 3, 4]. Используя метод reduce(), найдите произведение всех чисел.

const numbers = [1, 2, 3, 4];

const product = numbers.reduce((accum, number) => {
    return accum * number;
}, 1);

console.log(product);
