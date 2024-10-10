// 3. Поиск объекта по свойству
// Дан массив объектов, представляющих товары. Найдите первый товар с ценой больше 100.

// const items = [
//     { id: 1, name: 'Shirt', price: 50 },
//     { id: 2, name: 'Shoes', price: 120 },
//     { id: 3, name: 'Hat', price: 30 }
// ];
// // Ожидаемый результат: { id: 2, name: 'Shoes', price: 120 }

const items = [
    { id: 1, name: "Shirt", price: 50 },
    { id: 2, name: "Shoes", price: 120 },
    { id: 3, name: "Hat", price: 30 },
];

let itemPrice = items.find((item) => item.price > 100);

console.log(itemPrice);


