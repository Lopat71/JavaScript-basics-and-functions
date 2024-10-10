// 7. Фильтрация уникальных значений в массиве
// Дан массив чисел с дубликатами. Используя метод filter(), верните массив с уникальными значениями.

// const numbers = [1, 2, 2, 3, 4, 4, 5];
// // Ожидаемый результат: [1, 2, 3, 4, 5]
// Подсказка: можете использовать метод indexOf() для проверки уникальности элементов.

const numbers = [1, 2, 2, 3, 4, 4, 5];

let unicNumbers = numbers.filter((num, index, array) => {
    return array.indexOf(num) === index;
});
console.log(unicNumbers);
