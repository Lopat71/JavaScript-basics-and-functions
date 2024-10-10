// 7. Сортировка по длине строк:
// У вас есть массив words = ['apple', 'banana', 'kiwi', 'cherry']. Используйте метод sort(), чтобы отсортировать строки по длине. Как будет выглядеть результат?

// Отсортируйте строки по длине
let words = ["apple", "banana", "kiwi", "cherry"];

console.log(words.sort((a, b) => a.length - b.length));
