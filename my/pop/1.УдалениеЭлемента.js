// 11. Метод pop()
// Метод pop() удаляет последний элемент из массива и возвращает его. Если массив пуст, pop() возвращает undefined.

// let removedElement = array.pop();

// array — это массив, из которого вы хотите удалить последний элемент.

// let fruits = ['apple', 'banana', 'orange'];
// let lastElement = fruits.pop();

// console.log(fruits); // ['apple', 'banana']
// console.log(lastElement); // 'orange'

// Как это работает:
// * В массиве fruits последний элемент 'orange' удаляется.
// * Метод pop() возвращает удаленный элемент ('orange').
// * Массив теперь содержит только 'apple' и 'banana'.

// 1. Удаление последнего элемента
// Задача: Дан массив чисел [1, 2, 3, 4, 5]. Используя метод pop(), удалите последний элемент из массива и выведите новый массив.

let numbers = [1, 2, 3, 4, 5];

let deleteNum = numbers.pop();

console.log(deleteNum);

