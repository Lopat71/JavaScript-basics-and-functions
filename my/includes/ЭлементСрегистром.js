// 4. Проверка наличия элемента с учетом регистра
// Дан массив строк. Используя метод includes(), проверьте, содержится ли строка "Mango" в массиве.

// const fruits = ['apple', 'orange', 'banana', 'mango'];
// // Ожидаемый результат: false (потому что 'Mango' с большой буквы)

const fruits = ["apple", "orange", "banana", "mango"];

let word = fruits.includes("Mango");
console.log(word);
