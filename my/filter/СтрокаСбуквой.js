// 5. Фильтрация строк, которые содержат букву "a"
// Дан массив строк. Используя метод filter(), верните массив строк, которые содержат букву "a".

// const fruits = ['apple', 'banana', 'cherry', 'orange', 'grape'];
// // Ожидаемый результат: ['apple', 'banana', 'orange', 'grape']

const fruits = ["apple", "banana", "cherry", "orange", "grape"];

const letterA = fruits.filter((word) => word.includes("a"));

console.log(letterA);
