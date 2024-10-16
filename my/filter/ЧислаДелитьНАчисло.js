// 8. Фильтрация чисел, которые делятся на 3
// Дан массив чисел. Используя метод filter(), верните массив только с числами, которые делятся на 3 без остатка.

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// // Ожидаемый результат: [3, 6, 9]

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const okNumbers = numbers.filter((num) => {
    return num % 3 === 0;
});

console.log(okNumbers);
