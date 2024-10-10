// 5. Преобразование объектов
// Дан массив объектов:
// javascript
// Копировать код
// const users = [
//   { name: 'Alice', age: 25 },
//   { name: 'Bob', age: 30 },
//   { name: 'Charlie', age: 35 }
// ];
// Используя map(), создайте массив, содержащий только имена пользователей.

const users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 },
];

const usersName = users.map((user) => user.name);

console.log(usersName);
