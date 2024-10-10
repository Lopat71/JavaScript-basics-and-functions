// 4. Ограничение количества элементов: У вас есть строка sentence = "JavaScript is awesome". Используйте метод split() с пробелом в качестве разделителя, но ограничьте результат до двух элементов. Какой будет результат?javascriptКопировать кодlet sentence = "JavaScript is awesome";
5; // Ограничьте результат до двух элементов
let sentence = "JavaScript is awesome";
let newArray = sentence.split(" ", 2);
console.log(newArray);
