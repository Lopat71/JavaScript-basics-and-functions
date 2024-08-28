/**
 * С числами Фибоначчи мы уже познакомились в прошлой задаче.
 *
 * Напишите функцию isFibonacci(value) которая определяет, является ли value числом Фибоначчи.
 *
 * Пример:
 *
 * isFibonacci(1) === 1
 * isFibonacci(2) === 3
 * isFibonacci(55) === 10
 * isFibonacci(52) === undefined
 *
 * @param {number} value
 * @returns {undefined|number}
 */
function isFibonacci(value) {
    if (value === 0) return 0;
    if (value === 1) return 1;

    let prev = 1;
    let curr = 1;
    let index = 2;

    while (curr < value) {
        const next = prev + curr;
        prev = curr;
        curr = next;
        index++;
    }

    return curr === value ? index : undefined;
}

module.exports = isFibonacci;
