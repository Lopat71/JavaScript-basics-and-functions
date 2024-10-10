// 6. Сложение свойств объектов
// Дан массив объектов:

// const expenses = [
//   { amount: 20 },
//   { amount: 15 },
//   { amount: 30 }
// ];
// Используя метод reduce(), найдите общую сумму всех расходов.

const expenses = [{ amount: 20 }, { amount: 15 }, { amount: 30 }];

const total = expenses.reduce((accum, num) => {
    return accum + num.amount;
}, 0);

console.log(total);
