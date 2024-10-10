// Преобразовать элементы массива в строки:

// Задача: Есть массив чисел [10, 20, 30]. Пройдитесь по массиву с помощью forEach() и преобразуйте каждый элемент в строку, сохранив их в новом массиве.

const numbers = [10, 20, 30];
const StringNumbers = [];

numbers.forEach((num) => {
    StringNumbers.push(num.toString());
});
console.log(StringNumbers);
