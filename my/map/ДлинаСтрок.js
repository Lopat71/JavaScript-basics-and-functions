// 3. Извлечение длин строк
// Дан массив строк ['apple', 'banana', 'cherry']. Используя map(), создайте новый массив, содержащий длины этих строк.

const fruits = ["apple", "banana", "cherry"];

const fruitsLength = fruits.map((fruit) => fruit.length);

console.log(fruitsLength);

