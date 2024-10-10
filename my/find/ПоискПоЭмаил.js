// 7. Поиск пользователя по email
// Дан массив объектов пользователей, каждый из которых имеет поле email. Найдите пользователя с указанным email.

// const users = [
//     { name: 'Alice', email: 'alice@example.com' },
//     { name: 'Bob', email: 'bob@example.com' }
// ];
// const targetEmail = 'bob@example.com';
// // Ожидаемый результат: { name: 'Bob', email: 'bob@example.com' }

const users = [
    { name: "Alice", email: "alice@example.com" },
    { name: "Bob", email: "bob@example.com" },
];

const targetEmail = "bob@example.com";

let okUser = users.find((user) => user.email === targetEmail);

console.log(okUser);
