// 7. Сравнение типов
//     * Дано: массив const mixedArray = [1, '2', 3, 4];.
//     * Задача: Найдите индекс числа 2 и строки '2'. Какой будет результат для каждого из них?

const mixedArray = [1, "2", 3, 4];

const indexOfNumber2 = mixedArray.indexOf(2);
const indexOfString2 = mixedArray.indexOf("2");

console.log(indexOfNumber2); // Поиск числа 2
console.log(indexOfString2); // Поиск строки '2'
