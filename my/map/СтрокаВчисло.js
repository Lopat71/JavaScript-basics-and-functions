// 2. Преобразование строк в числа
// Дан массив строковых чисел ['10', '20', '30', '40']. Используя метод map(), преобразуйте его в массив чисел.

const StringNumbers = ["10", "20", "30", "40"];

const numbers = StringNumbers.map((StringNumber) => Number(StringNumber));
console.log(numbers);
