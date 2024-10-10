// 7. Поиск индекса пользователя по email
// Дан массив объектов пользователей, каждый из которых имеет поле email. Найдите индекс пользователя с указанным email.

// const users = [
//     { name: 'Alice', email: 'alice@example.com' },
//     { name: 'Bob', email: 'bob@example.com' }
// ];
// const targetEmail = 'bob@example.com';
// // Ожидаемый результат: 1

const users = [
    { name: "Alice", email: "alice@example.com" },
    { name: "Bob", email: "bob@example.com" },
];

const targetEmail = "bob@example.com";

let requiredUsers = users.findIndex((user) => user.email === targetEmail);

console.log(requiredUsers);
