// Задача 10: Сравнение массивов
// Условие: У тебя есть массив original = [1, 2, 3]. Используй метод push(), чтобы создать новый массив newArray, который будет содержать все элементы original, а затем добавь 4 и 5.

let original = [1, 2, 3];

let newArray = [];

for (i = 0; i < original.length; i++) {
    newArray.push(original[i]);
}

newArray.push(4);
newArray.push(5);

console.log(newArray);
