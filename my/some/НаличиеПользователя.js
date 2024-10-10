// Задача 4: Проверка наличия пользователя
// Условие: У вас есть массив объектов пользователей:

// const users = [
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 30 },
//   { name: "Charlie", age: 35 }
// ];
// Задание: Напишите функцию, которая проверяет, есть ли в массиве пользователь с именем "Bob".

const users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 },
];

let requaredUsers = users.some((user) => {
    return user.name === "Bob";
});
console.log(requaredUsers);
