// 8. Приведение строк к верхнему регистру
// Дан массив строк ['hello', 'world']. Используя map(), создайте массив, где каждая строка будет преобразована в верхний регистр.

const words = ["hello", "world"];

const UpWords = words.map((word) => word.toUpperCase());

console.log(UpWords);

