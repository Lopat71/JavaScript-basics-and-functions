// 10. Метод push()
// Метод push() добавляет один или несколько элементов в конец массива и возвращает новую длину массива.

// array.push(element1, element2, ..., elementN);

// array — это массив, в который вы хотите добавить элементы.
// element1, element2, ..., elementN — это элементы, которые вы хотите добавить в конец массива. Можно добавить один или несколько элементов.

// let fruits = ['apple', 'banana'];
// let newLength = fruits.push('orange', 'grape');

// console.log(fruits); // ['apple', 'banana', 'orange', 'grape']
// console.log(newLength); // 4

// Как это работает:
// * В массив fruits добавляются элементы 'orange' и 'grape', в конец массива.
// * Метод push() возвращает новую длину массива (в данном случае 4).

// Задача 1: Добавление элемента
// Условие: У тебя есть массив fruits, содержащий ['apple', 'banana']. Используй метод push(), чтобы добавить в массив 'orange'.

let fruits = ["apple", "banana"];

let newLength = fruits.push("orange");

console.log(fruits);


