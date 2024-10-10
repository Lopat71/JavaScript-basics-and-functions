// Удаление дубликатов: Напишите функцию, которая принимает массив с дубликатами. Используйте метод shift() для удаления элементов и создайте новый массив, который будет содержать только уникальные элементы.

function removeDuplicates(arr) {
    let uniqueElements = [];

    while (arr.length > 0) {
        let element = arr.shift(); // Удаляем первый элемент
        if (!uniqueElements.includes(element)) {
            uniqueElements.push(element); // Добавляем только уникальные элементы
        }
    }

    return uniqueElements;
}

// Пример использования
let arrayWithDuplicates = [1, 2, 2, 3, 4, 4, 5];
let uniqueArray = removeDuplicates(arrayWithDuplicates);

console.log(uniqueArray); // [1, 2, 3, 4, 5]
