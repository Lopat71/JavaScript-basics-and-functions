// 10. Получение уникальных значений из массива
// Дан массив чисел [1, 2, 2, 3, 4, 4, 5]. Используя метод reduce(), получите новый массив с уникальными значениями.

const numbers = [1, 2, 2, 3, 4, 4, 5];

const unic = numbers.reduce((accum, num) => {
    if (!accum.includes(num)) {
        accum.push(num);
    }
    return accum;
}, []);

console.log(unic);
