// 8. Множественные разделители: У вас есть строка data = "apple,,banana,orange". Разделите ее по запятой и объясните, как split() обрабатывает несколько подряд идущих разделителей. Каким будет результат?javascriptКопировать код
9; // Разделите строку с двумя запятыми подряд
let data = "apple,,banana,orange";

let newArray = data.split(",");
console.log(newArray);
