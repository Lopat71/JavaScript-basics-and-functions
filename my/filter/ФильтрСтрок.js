// 10. Фильтрация строк по длине слов
// Дан массив предложений. Используя метод filter(), верните только те предложения, где количество слов больше 2.

// const sentences = ['Hello world', 'This is a test', 'JavaScript', 'Filter method'];
// // Ожидаемый результат: ['This is a test', 'Filter method']

const sentences = [
    "Hello world",
    "This is a test",
    "JavaScript",
    "Filter method",
];

const filteredSentences = sentences.filter((sentence) => {
    return sentence.split(" ").length > 2;
});

console.log(filteredSentences);
