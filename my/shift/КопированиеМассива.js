// Копирование массива: Создайте массив строк. Используя метод shift(), создайте новый массив, в который будут помещены все элементы исходного массива, а исходный массив должен стать пустым. Выведите оба массива.

const strings = ["Odin", "Dva", "Try"];

let newArray = [];

while (strings.length > 0) {
    newArray.push(strings.shift());
}

console.log(strings);
console.log(newArray);
