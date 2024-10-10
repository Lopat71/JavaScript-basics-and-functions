// 8. Преобразование массива в строку
// Дан массив строк ['hello', 'world', 'from', 'reduce']. Используя метод reduce(), объедините все строки в одну, разделяя их пробелом.

const words = ["hello", "world", "from", "reduce"];

const sentence = words.reduce((accum, word) => {
    return accum + " " + word;
}, "");

console.log(sentence);
