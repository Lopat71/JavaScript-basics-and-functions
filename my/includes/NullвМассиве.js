// 9. Проверка наличия значения null в массиве
// Дан массив, содержащий различные значения, включая null. Используя метод includes(), проверьте, есть ли значение null в массиве.

// const mixedArray = [undefined, null, 0, 'hello'];
// // Ожидаемый результат: true

const mixedArray = [undefined, null, 0, "hello"];

let requaredNull = mixedArray.includes(null);

console.log(requaredNull);
