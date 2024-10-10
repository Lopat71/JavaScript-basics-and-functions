// 6. Вывести индекс каждого элемента массива:
//     * Задача: Есть массив ['apple', 'banana', 'pear']. Используя forEach(), выведите каждый элемент массива вместе с его индексом.

const fruts = ["apple", "banana", "pear"];

fruts.forEach((fruit, index) => {
    console.log(`Индекс: ${index}, Фрукт: ${fruit}`);
});
