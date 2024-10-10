// 4. Изменить значения элементов массива:
//     * Задача: Есть массив [2, 4, 6, 8]. Используйте forEach(), чтобы увеличить каждый элемент на 1 и выведите обновленный массив.

const numbers = [2, 4, 6, 8];

const newNumbers = [];

numbers.forEach((num) => {
    newNumbers.push(num + 1);
});

console.log(newNumbers);
