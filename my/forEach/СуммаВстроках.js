// 9. Подсчитать сумму чисел в строковом массиве:
//     * Задача: Есть массив строковых чисел ['10', '20', '30']. Пройдитесь по нему с помощью forEach() и найдите сумму всех чисел, преобразовав их в числовой формат.

const StringNumbers = ["10", "20", "30"];

let sum = 0;

StringNumbers.forEach((StringNumber) => {
    sum += Number(StringNumber);
});
console.log(`Сумма: ${sum}`);
