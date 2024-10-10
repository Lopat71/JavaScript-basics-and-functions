/**
 * Функция, которая принимает на вход массив чисел и возвращает среднее значение всех элементов массива.
 * @param {number[]} arr - входной массив чисел
 * @return {number} - среднее значение всех элементов массива
 */
function average(arr) {
    return (
        arr.reduce(function (sum, number) {
            return (sum += number);
        }, 0) / arr.length
    );
}
