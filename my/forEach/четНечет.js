// Найти четные и нечетные числа:

// Задача: Пройдитесь по массиву чисел [1, 2, 3, 4, 5, 6, 7, 8] с использованием forEach() и разделите числа на два массива: один для четных, другой для нечетных чисел.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

let chet = [];
let neChet = [];

numbers.forEach((num) => {
    if (num % 2 === 0) {
        chet.push(num);
    } else {
        neChet.push(num);
    }
});

console.log("Четные числа:", chet); 
console.log("Нечетные числа:", neChet);
