// 5. Создание объекта из массива
// Дан массив объектов:
// const items = [
//   { id: 1, name: 'item1' },
//   { id: 2, name: 'item2' },
//   { id: 3, name: 'item3' }
// ];
// Используя метод reduce(), создайте объект, где ключами будут id, а значениями — соответствующие объекты.

const items = [
    { id: 1, name: "item1" },
    { id: 2, name: "item2" },
    { id: 3, name: "item3" },
];

const itemsById = items.reduce((accum, item) => {
    accum[item.id] = item;
    return accum;
}, {});

console.log(itemsById);
