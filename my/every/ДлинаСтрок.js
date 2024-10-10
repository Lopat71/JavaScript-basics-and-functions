// 2. Проверка длины строк
// * Задача: Дан массив строк ['apple', 'banana', 'pear', 'plum']. Используя метод every(), проверьте, все ли строки в массиве имеют длину больше 3 символов.
let fruits = ["apple", "banana", "pear", "plum"];
let fruitsLength = fruits.every((fruit) => fruit.length > 3);

console.log(fruitsLength);
