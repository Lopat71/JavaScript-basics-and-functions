// Задача 3: Поиск строки с длиной больше 5 символов
// Условие: У вас есть массив строк:

// const strings = ["apple", "banana", "pear", "kiwi"];
// Задание: Напишите функцию, которая проверяет, есть ли в массиве хотя бы одна строка с длиной больше 5 символов.

const strings = ["apple", "banana", "pear", "kiwi"];

let stringLength = strings.some((fruit) => {
    return fruit.length > 5;
});
console.log(stringLength);
