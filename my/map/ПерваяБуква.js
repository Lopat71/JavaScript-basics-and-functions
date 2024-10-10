// 7. Извлечение первых букв строк
// Дан массив слов ['cat', 'dog', 'elephant']. Используя метод map(), создайте массив, содержащий первые буквы каждого слова.

const words = ["cat", "dog", "elephant"];

const FirstLetters = words.map((word) => word[0]);

console.log(FirstLetters);

