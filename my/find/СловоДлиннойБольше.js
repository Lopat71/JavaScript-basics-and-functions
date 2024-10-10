// 2. Поиск первого слова с длиной больше 5 символов
// Дан массив строк. Используя метод find(), найдите первое слово, длина которого больше 5 символов.

// const words = ['apple', 'banana', 'cherry', 'kiwi'];
// // Ожидаемый результат: 'banana'

const words = ["apple", "banana", "cherry", "kiwi"];

let okWords = words.find((word) => word.length > 5);

console.log(okWords);

