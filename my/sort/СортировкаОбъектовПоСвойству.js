// 4. Сортировка объектов по свойству:
// У вас есть массив объектов users = [{name: 'Alice', age: 30}, {name: 'Bob', age: 25}, {name: 'Charlie', age: 35}]. Используйте метод sort(), чтобы отсортировать пользователей по возрасту. Как будет выглядеть результат?

// Отсортируйте пользователей по возрасту
let users = [
    { name: "Alice", age: 30 },
    { name: "Bob", age: 25 },
    { name: "Charlie", age: 35 },
];

console.log(users.sort((a, b) => a.age - b.age));
