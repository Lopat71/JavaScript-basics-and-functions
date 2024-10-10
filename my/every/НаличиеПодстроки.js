// 6. Проверка наличия подстроки
// * Задача: Дан массив строк ['hello world', 'worldwide', 'small world']. Используя метод every(), проверьте, содержат ли все строки в массиве подстроку "world".

let phrases = ["hello world", "worldwide", "small world"];

let phrasesWord = phrases.every((word) => word.includes("world"));
console.log(phrasesWord);
