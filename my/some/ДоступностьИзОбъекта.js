// Задача 5: Проверка доступности товаров
// Условие: У вас есть массив товаров:

// const products = [
//   { name: "Laptop", available: true },
//   { name: "Phone", available: false },
//   { name: "Tablet", available: true }
// ];
// Задание: Напишите функцию, которая проверяет, есть ли хотя бы один товар, который доступен для покупки.

const products = [
    { name: "Laptop", available: true },
    { name: "Phone", available: false },
    { name: "Tablet", available: true },
];

function accessibleProduct(arr) {
    return arr.some((product) => product.available);
}

let result = accessibleProduct(products);
console.log(result);
