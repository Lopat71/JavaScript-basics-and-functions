// Сумма первых двух элементов: Создайте массив с пятью числами и удалите первые два элемента с помощью shift(). Выведите сумму этих двух удаленных элементов.

const numbers = [1, 2, 3, 4, 5];
let removedElement = numbers.shift();
let removedElements = numbers.shift();

let sum = removedElement + removedElements;

console.log(sum);
