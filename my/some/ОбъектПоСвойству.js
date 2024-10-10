// Задача 9: Проверка объектов по свойству
// Условие: У вас есть массив объектов:

// const items = [
//   { name: "Item 1", status: "available" },
//   { name: "Item 2", status: "out of stock" },
//   { name: "Item 3", status: "available" }
// ];
// Задание: Напишите функцию, которая проверяет, есть ли хотя бы один объект со статусом "out of stock".

const items = [
    { name: "Item 1", status: "available" },
    { name: "Item 2", status: "out of stock" },
    { name: "Item 3", status: "available" },
];

function requaredStatus(items) {
    return items.some((item) => item.status === "out of stock");
}

console.log(requaredStatus(items));
