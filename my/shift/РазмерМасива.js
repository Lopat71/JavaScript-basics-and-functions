// Проверка размера массива: Создайте массив с произвольными элементами. В цикле while вызывайте метод shift(), пока длина массива не станет равной 0. После каждого вызова shift() выводите текущую длину массива.

const numbers = [1, 2, 3, 4, 5];

while (numbers.length > 0) {
    numbers.shift();
    console.log("Длина Массива:", numbers.length);
}

console.log(numbers);
