// 10. Объединить элементы массива в строку:
//     * Задача: Пройдитесь по массиву ['I', 'love', 'JavaScript'] с использованием forEach() и объедините все элементы в одну строку через пробел.

const words = ["I", "love", "JavaScript"];

let string = "";

words.forEach((word, index) => {
    string += word;
    if (index < words.length - 1) {
        string += " ";
    }
});

console.log(string);
