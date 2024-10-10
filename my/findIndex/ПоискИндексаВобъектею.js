// 5. Поиск индекса пользователя старше 18 лет
// Дан массив объектов, представляющих пользователей. Найдите индекс первого пользователя, чей возраст больше 18 лет.

// const users = [
//     { name: 'John', age: 17 },
//     { name: 'Jane', age: 22 },
//     { name: 'Mike', age: 16 }
// ];
// // Ожидаемый результат: 1

const users = [
    { name: "John", age: 17 },
    { name: "Jane", age: 22 },
    { name: "Mike", age: 16 },
];

let requiredUsers = users.findIndex((user) => user.age > 18);
console.log(requiredUsers);
