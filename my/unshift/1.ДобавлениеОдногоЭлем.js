// 13. unshift()
// Метод unshift() добавляет один или несколько элементов в начало массива и возвращает новую длину массива.
// Синтаксис:

// array.unshift(element1, element2, ...);
// Пример:

// const numbers = [2, 3];
// numbers.unshift(1);
// console.log(numbers); // [1, 2, 3]

// 1. Добавление одного элемента: Создайте массив fruits с элементами ['apple', 'banana', 'orange']. Добавьте в начало массива фрукт ‘grape’. Какой будет новый массив?

let fruits = ["apple", "banana", "orange"];
fruits.unshift("grape");
console.log(fruits);
