// 8. Поиск индекса первого палиндрома
// Дан массив строк. Используя метод findIndex(), найдите индекс первой строки, которая является палиндромом (читается одинаково слева направо и справа налево).

// const words = ['apple', 'level', 'world', 'madam'];

const words = ["apple", "level", "world", "madam"];

let requiredwords = words.findIndex(
    (word) => word === word.split("").reverse().join("")
);
console.log(requiredwords);

