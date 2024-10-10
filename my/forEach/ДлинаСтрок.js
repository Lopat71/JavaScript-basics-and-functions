// 7. Создать массив длин строк:
//     * Задача: Есть массив строк ['cat', 'elephant', 'dog']. Используя forEach(), создайте новый массив, содержащий длины каждой строки.

const animals = ["cat", "elephant", "dog"];

let lengths = [];

animals.forEach((animal) => {
    lengths.push(animal.length);
});

console.log(lengths);
