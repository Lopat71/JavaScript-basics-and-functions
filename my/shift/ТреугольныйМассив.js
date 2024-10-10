// Треугольный массив: Создайте массив с числами от 1 до 5. С помощью shift() поочередно удаляйте элементы и формируйте новый массив, состоящий только из удаленных элементов. Выведите новый массив.

const numbers = [1, 2, 3, 4, 5];

let removedElements = [];

while (numbers.length > 0) {
    removedElements.push(numbers.shift());
}

console.log(removedElements);
