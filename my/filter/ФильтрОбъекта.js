// 4. Фильтрация пользователей старше 18 лет
// Дан массив объектов, представляющих пользователей. Используя метод filter(), верните массив с пользователями, чей возраст больше или равен 18.

// const users = [
//     { name: 'John', age: 17 },
//     { name: 'Jane', age: 22 },
//     { name: 'Mike', age: 18 },
//     { name: 'Sara', age: 15 }
// ];
// // Ожидаемый результат: [{ name: 'Jane', age: 22 }, { name: 'Mike', age: 18 }]

const users = [
    { name: "John", age: 17 },
    { name: "Jane", age: 22 },
    { name: "Mike", age: 18 },
    { name: "Sara", age: 15 },
];

const ageUsers = users.filter((user) => user.age >= 18);

console.log(ageUsers);

