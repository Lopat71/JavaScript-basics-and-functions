// 3. Проверка типа данных
// * Задача: Дан массив [10, 20, '30', 40]. Используя метод every(), проверьте, все ли элементы массива являются числами.

let numbers = [10, 20, "30", 40];
let requaredNumbers = numbers.every((num) => typeof num === "number");

console.log(requaredNumbers);
