// 10. Поиск индекса имени, начинающегося с буквы "J"
// Дан массив имен. Используя метод findIndex(), найдите индекс первого имени, которое начинается с буквы "J".

// const names = ['Alice', 'Bob', 'Jane', 'Mike'];
// // Ожидаемый результат: 2

const names = ["Alice", "Bob", "Jane", "Mike"];

let requiredNames = names.findIndex((name) => name.startsWith("J"));

console.log(requiredNames);
