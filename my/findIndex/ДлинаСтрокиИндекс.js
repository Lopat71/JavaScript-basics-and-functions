// 2. Поиск индекса строки с длиной больше 5 символов
// Дан массив строк. Используя метод findIndex(), найдите индекс первой строки, длина которой больше 5 символов.

// const words = ['apple', 'banana', 'cherry', 'kiwi'];
// // Ожидаемый результат: 1

const words = ["apple", "banana", "cherry", "kiwi"];

let requiredWord = words.findIndex((word) => word.length > 5);

console.log(requiredWord);
