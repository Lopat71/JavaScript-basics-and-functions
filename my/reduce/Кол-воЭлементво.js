// 3. Подсчет количества элементов в массиве
// Дан массив строк ['apple', 'banana', 'orange']. Используя метод reduce(), подсчитайте количество элементов в массиве.

const fruits = ["apple", "banana", "orange"];

const total = fruits.reduce((accum, fruit) => {
    return accum + 1;
}, 0);

console.log(total);
