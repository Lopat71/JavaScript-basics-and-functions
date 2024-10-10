// 5. Поиск пользователя старше 18 лет
// Дан массив объектов, представляющих пользователей. Найдите первого пользователя, чей возраст больше 18 лет.

// const users = [
//     { name: 'John', age: 17 },
//     { name: 'Jane', age: 22 },
//     { name: 'Mike', age: 16 }
// ];
// // Ожидаемый результат: { name: 'Jane', age: 22 }

const users = [
    { name: "John", age: 17 },
    { name: "Jane", age: 22 },
    { name: "Mike", age: 16 },
];

let okUser = users.find((user) => user.age > 18);

console.log(okUser);
