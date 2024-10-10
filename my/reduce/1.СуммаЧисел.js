// reduce()
// Метод reduce() обрабатывает элементы массива и возвращает одно итоговое значение.

// const result = array.reduce(function(accumulator, element, index, array) {
//     return выражение;
// }, initialValue);

// accumulator — накопитель, в котором накапливается результат.
// element — текущий элемент.
// initialValue — начальное значение аккумулятора (необязательно).

// 1. Сумма чисел в массиве
// Дан массив чисел [1, 2, 3, 4, 5]. Используя метод reduce(), найдите сумму всех чисел.

const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((accum, number) => {
    return accum + number;
}, 0);

console.log(sum);
