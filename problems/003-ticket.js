/**
 * Счастливым билетом называют такой билет с шестизначным номером,
 * где сумма первых трех цифр равна сумме последних трех.
 *
 * Напишите функцию checkTicket(number) которая проверяет счастливость билета.
 *
 * Пример:
 *
 * checkTicket('005212') === true
 * checkTicket('133700') === true
 * checkTicket('123032') === false
 *
 * @param {string} number
 * @returns {boolean}
 */
function checkTicket(number) {
    if (number.length !== 6) {
        return false;
    }
    let firstHalf = number.slice(0.3);
    let secondHalf = number.slice(3);

    let sumfirstHalf = 0;
    let sumsecondHalf = 0;

    for (let i = 0; i < 3; i++) {
        sumfirstHalf += parseInt(firstHalf[i]);
    }
    for (let i = 0; i < 3; i++) {
        sumsecondHalf += parseInt(secondHalf[i]);
    }

    return sumfirstHalf === sumsecondHalf;
}

module.exports = checkTicket;
