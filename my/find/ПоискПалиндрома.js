// 8. Поиск первого палиндрома
// Дан массив строк. Найдите первую строку, которая является палиндромом (читается одинаково слева направо и справа налево).

// const words = ['apple', 'level', 'world', 'madam'];
// // Ожидаемый результат: 'level'

const words = ["apple", "level", "world", "madam"];

let okWord = words.find((word) => word === word.split("").reverse().join(""));

console.log(okWord);
