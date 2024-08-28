/**
 * Слова-анаграммы — это слова, записанные одними и теми же буквами в разном порядке,
 * регистр букв при этом игнорируется.
 * Анаграммами, например, являются слова «Волос» и «СЛОВО».
 *
 * Напишите функцию anagram(x, y) проверяющую, являются ли x и y словами-анаграммами.
 *
 * Пример:
 *
 * anagram('Волос', 'Слово') === true
 * anagram('Живу', 'Вижу') === true
 *
 * @param {string} x
 * @param {string} y
 * @returns {boolean}
 */
function anagram(x, y) {
    const lowerX = x.toLowerCase();
    const lowerY = y.toLowerCase();

    if (lowerX === "" || lowerY === "") {
        return false;
    }

    const sortedX = lowerX.split("").sort().join("");
    const sortedY = lowerY.split("").sort().join("");

    return sortedX === sortedY;
}

module.exports = anagram;
