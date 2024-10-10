// 9. Фильтрация объектов по значению свойства
// Дан массив объектов. Используя метод filter(), верните массив только с объектами, у которых свойство isActive равно true.

// const items = [
//     { id: 1, name: 'item1', isActive: true },
//     { id: 2, name: 'item2', isActive: false },
//     { id: 3, name: 'item3', isActive: true }
// ];
// // Ожидаемый результат: [{ id: 1, name: 'item1', isActive: true }, { id: 3, name: 'item3', isActive: true }]

const items = [
    { id: 1, name: "item1", isActive: true },
    { id: 2, name: "item2", isActive: false },
    { id: 3, name: "item3", isActive: true },
];

let isActiveItems = items.filter((item) => {
    return item.isActive;
});

console.log(isActiveItems);
