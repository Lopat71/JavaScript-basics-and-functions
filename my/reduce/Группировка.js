// 7. Сгруппировать элементы по значению
// Дан массив строк ['apple', 'banana', 'apple', 'orange', 'banana']. Используя метод reduce(), сгруппируйте элементы по значению и создайте объект с количеством каждого элемента.

const fruitsString = ["apple", "banana", "apple", "orange", "banana"];

const grouppedFruits = fruitsString.reduce((accum, fruit) => {
    if (accum[fruit]) {
        accum[fruit] += 1;
    } else {
        accum[fruit] = 1;
    }

    return accum;
}, {});

console.log(grouppedFruits);
