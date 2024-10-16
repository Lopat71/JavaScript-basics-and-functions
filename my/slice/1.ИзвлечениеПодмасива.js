// 14. slice()
// Метод slice() в JavaScript используется для извлечения определенной части массива и возвращает новый массив, который содержит выбранные элементы. Важно отметить, что метод slice() не изменяет оригинальный массив.

// Синтаксис:

// const newArray = array.slice(begin, end);

// Параметры
// 1. start (обязательный):
//     * Индекс, с которого начинается извлечение.
//     * Если start является положительным числом, то индекс считается от начала массива (0 — первый элемент, 1 — второй элемент и так далее).
//     * Если start является отрицательным числом, то индекс считается с конца массива (например, -1 — последний элемент, -2 — предпоследний элемент и так далее).
// 2. end (необязательный):
//     * Индекс, на котором извлечение заканчивается (но элемент с этим индексом не включается в новый массив).
//     * Если end не указан, slice() будет извлекать элементы до конца массива.
//     * Если end является отрицательным числом, он также считается от конца массива.
// Возвращаемое значение
// * Метод slice() возвращает новый массив, который содержит элементы из оригинального массива, начиная с индекса start и заканчивая индексом end (не включая элемент с индексом end).

// Пример:

// const numbers = [1, 2, 3, 4, 5];
// const sliced = numbers.slice(1, 3);
// console.log(sliced); // [2, 3]

// Извлечение подмассива: У вас есть массив numbers = [10, 20, 30, 40, 50]. Извлеките элементы с индексами от 1 до 3 (не включая 3). Какой будет новый массив?

// let numbers = [10, 20, 30, 40, 50];
// // Извлеките элементы с индексами от 1 до 3

let numbers = [10, 20, 30, 40, 50];
let sliced = numbers.slice(1, 3);
console.log(sliced);

