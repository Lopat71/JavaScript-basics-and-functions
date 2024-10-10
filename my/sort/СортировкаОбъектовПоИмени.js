// 8. Сортировка объектов по имени:
// У вас есть массив объектов products = [{name: 'Laptop', price: 1000}, {name: 'Phone', price: 500}, {name: 'Tablet', price: 300}]. Используйте метод sort(), чтобы отсортировать продукты по имени. Как будет выглядеть результат?

// Отсортируйте продукты по имени
let products = [
    { name: "Laptop", price: 1000 },
    { name: "Phone", price: 500 },
    { name: "Tablet", price: 300 },
];

console.log(products.sort((a, b) => a.price - b.price));
