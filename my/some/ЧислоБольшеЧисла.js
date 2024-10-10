// Задача 6: Проверка наличия чисел больше 100
// Условие: У вас есть массив чисел:

// const numbers = [10, 20, 150, 40, 60];
// Задание: Напишите функцию, которая проверяет, есть ли в массиве число, большее 100.

const numbers = [10, 20, 150, 40, 60];

function requaredNumbers(arr) {
    return arr.some((num) => num > 100);
}

let result = requaredNumbers(numbers);
console.log(result);
