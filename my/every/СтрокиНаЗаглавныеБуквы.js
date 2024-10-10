// 8. Проверка строки на заглавные буквы
// * Задача: Дан массив строк ['Hello', 'World', 'JavaScript']. Используя метод every(), проверьте, начинается ли каждая строка в массиве с заглавной буквы.

let words = ["Hello", "World", "JavaScript"];

let UpperSymbol = words.every(
    (word) => word.charAt(0) === word.charAt(0).toUpperCase()
);
console.log(UpperSymbol);
