// 5. Проверка активности пользователей
// * Задача: Дан массив объектов пользователей, где каждый объект имеет поле active, которое может быть true или false. Используя метод every(), проверьте, активны ли все пользователи в массиве.
// javascript
// Копировать код
const users = [
    { name: "Alice", active: true },
    { name: "Bob", active: true },
    { name: "Charlie", active: true },
];

let requaredUsers = users.every((user) => user.active);
console.log(requaredUsers);
