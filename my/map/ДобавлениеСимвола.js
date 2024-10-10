// 4. Добавление символов к строкам
// Дан массив строк ['a', 'b', 'c']. Используя map(), создайте новый массив, где к каждой строке будет добавлено "!" (например, ['a!', 'b!', 'c!']).

const Letters = ["a", "b", "c"];

const NewLetter = Letters.map((letter) => letter + "!");

console.log(NewLetter);


