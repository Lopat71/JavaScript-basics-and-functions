// Обратный порядок: Напишите функцию, которая принимает массив и возвращает новый массив, состоящий из элементов оригинального массива в обратном порядке, используя метод shift().

function reversArray(arr) {
    let reversed = [];

    while (arr.length > 0) {
        reversed.unshift(arr.shift());
    }
    return reversed;
}

let originalArray = [1, 2, 3, 4, 5];
let reversedArray = reversArray(originalArray);

console.log(reversedArray);
