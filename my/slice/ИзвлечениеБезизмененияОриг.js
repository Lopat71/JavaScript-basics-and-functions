// Извлечение элементов без изменения оригинала: У вас есть массив original = [5, 10, 15, 20, 25]. Используйте метод slice() для создания нового массива, который содержит элементы с индексами 1 и 2. Как будет выглядеть новый массив?

// let original = [5, 10, 15, 20, 25];
// // Создайте новый массив с элементами с индексами 1 и 2

let original = [5, 10, 15, 20, 25];

let newArray = original.slice(1, 3);

console.log(newArray);
