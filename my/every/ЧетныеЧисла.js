// 4. Проверка на четные числа
// * Задача: Дан массив [2, 4, 6, 8, 10]. Используя метод every(), проверьте, все ли числа в массиве четные.

let numbers = [2, 4, 6, 8, 10];

let requaredNumbers = numbers.every((num) => num % 2 === 0);

console.log(requaredNumbers);
