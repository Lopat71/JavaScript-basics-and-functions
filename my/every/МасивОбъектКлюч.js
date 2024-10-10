// 10. Проверка массива объектов на наличие ключа
// * Задача: Дан массив объектов, где каждый объект представляет собой книгу с полями title и author. Используя метод every(), проверьте, содержат ли все объекты поле author.

const books = [
    { title: "The Hobbit", author: "J.R.R. Tolkien" },
    { title: "1984", author: "George Orwell" },
    { title: "Fahrenheit 451", author: "Ray Bradbury" },
];

let validAuthor = books.every((book) => book.hasOwnProperty("author"));

console.log(validAuthor);
