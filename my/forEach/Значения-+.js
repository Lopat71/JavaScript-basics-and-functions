// 5. Подсчитать количество положительных и отрицательных чисел:
//     * Задача: Есть массив чисел [3, -1, -5, 10, -7, 8]. С помощью forEach() подсчитайте количество положительных и отрицательных чисел.

const numbers = [3, -1, -5, 10, -7, 8];

let plusNum = 0;
let minusNun = 0;
numbers.forEach((num) => {
    if (num > 0) {
        plusNum++;
    } else {
        minusNun++;
    }
});

console.log(plusNum);
console.log(minusNun);
