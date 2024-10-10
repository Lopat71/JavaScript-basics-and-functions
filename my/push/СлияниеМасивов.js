// Задача 3: Слияние массивов
// Условие: У тебя есть два массива: colors = ['red', 'blue'] и moreColors = ['green', 'yellow']. Используй метод push(), чтобы добавить все элементы из moreColors в colors.

colors = ["red", "blue"];
moreColors = ["green", "yellow"];

for (let i = 0; i < moreColors.length; i++) {
    colors.push(moreColors[i]);
}
console.log(colors);
