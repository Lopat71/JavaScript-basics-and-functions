// 10. Поиск первого имени, начинающегося с буквы "J"
// Дан массив имен. Используя метод find(), найдите первое имя, которое начинается с буквы "J".

// const names = ['Alice', 'Bob', 'Jane', 'Mike'];
// // Ожидаемый результат: 'Jane'

const names = ["Alice", "Bob", "Jane", "Mike"];

let letters = names.find((letter) => letter.startsWith("J"));

console.log(letters);
