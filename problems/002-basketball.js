/**
 * Известны результаты каждой из 4х четвертей баскетбольной встречи.
 * Нужно определить победителя матча. Побеждает команда,
 * набравшая больше очков в течение всего матча.
 *
 * Напишите функцию getWinner(points) возвращающую номер победившей команды,
 * либо undefined в случае ничьей.
 *
 * Пример:

 * getWinner(['23-26', '24-30', '30-27', '35-31']) === 2
 * getWinner(['36-32', '32-24', '20-28', '30-26']) === 1
 * getWinner(['36-18', '22-31', '27-21', '19-34']) === undefined
 *
 * @param {string[]} points
 * @returns {(number|undefined)}
 */
function getWinner(points) {
    let team1score = 0;
    let team2score = 0;

    for (let i = 0; i < points.length; i++) {
        let scores = points[i].split("-");

        let team1 = parseInt(scores[0]);
        let team2 = parseInt(scores[1]);
        team1score += team1;
        team2score += team2;
    }
    if (team1score > team2score) {
        return 1;
    } else if (team1score < team2score) {
        return 2;
    } else {
        return undefined;
    }
}

module.exports = getWinner;
