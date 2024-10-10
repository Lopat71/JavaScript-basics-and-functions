// 2. Фильтрация строк с длиной больше 3 символов
// Дан массив строк. Используя метод filter(), верните только те строки, длина которых больше 3 символов.

// const words = ['cat', 'dog', 'elephant', 'ant', 'tiger'];
// Ожидаемый результат: ['elephant', 'tiger']

const words = ["cat", "dog", "elephant", "ant", "tiger"];

const okWords = words.filter((word) => word.length > 3);

console.log(okWords);
