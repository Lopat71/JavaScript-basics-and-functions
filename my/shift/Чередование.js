// Чередование элементов: Напишите код, который создает массив из 6 чисел. Используя shift(), переместите первые три элемента в новый массив, а оставшиеся три оставьте в исходном массиве. Выведите оба массива.

const numbers = [1, 2, 3, 4, 5, 6];

let newArray = [];

while (numbers.length > 3) {
    newArray.push(numbers.shift());
}

console.log(newArray);
console.log(numbers);
