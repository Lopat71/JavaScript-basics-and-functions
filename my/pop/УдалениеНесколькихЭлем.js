// 6. Удаление нескольких элементов
// * Задача: Дан массив объектов:

// const users = [{name: 'Alice'}, {name: 'Bob'}, {name: 'Charlie'}];
// Используя метод pop(), удалите последний элемент из массива два раза и выведите новый массив.

const users = [{ name: "Alice" }, { name: "Bob" }, { name: "Charlie" }];

users.pop();
users.pop();

console.log(users);

