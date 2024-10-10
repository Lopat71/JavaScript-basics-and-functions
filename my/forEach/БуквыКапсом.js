// 8. Привести все строки к верхнему регистру:
//     * Задача: Пройдитесь по массиву ['hello', 'world'] с использованием forEach() и преобразуйте каждую строку в верхний регистр.

const words = ["hello", "world"];

words.forEach((word, index, array) => {
    array[index] = word.toUpperCase();
});

console.log(words);
