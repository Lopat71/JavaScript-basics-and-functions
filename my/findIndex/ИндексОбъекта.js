// 3. Поиск индекса объекта по свойству
// Дан массив объектов, представляющих товары. Найдите индекс первого товара с ценой больше 100.

// const items = [
//     { id: 1, name: 'Shirt', price: 50 },
//     { id: 2, name: 'Shoes', price: 120 },
//     { id: 3, name: 'Hat', price: 30 }
// ];
// // Ожидаемый результат: 1

const items = [
    { id: 1, name: "Shirt", price: 50 },
    { id: 2, name: "Shoes", price: 120 },
    { id: 3, name: "Hat", price: 30 },
];

let requiredItems = items.findIndex((item) => item.price > 100);

console.log(requiredItems);
