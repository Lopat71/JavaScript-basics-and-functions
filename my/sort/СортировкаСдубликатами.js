// 9. Сортировка с дубликатами:
// У вас есть массив numbers = [5, 3, 8, 5, 1, 3]. Используйте метод sort(), чтобы отсортировать массив по возрастанию, сохраняя дубликаты. Как будет выглядеть результат?

// Отсортируйте массив, сохраняя дубликаты
let numbers = [5, 3, 8, 5, 1, 3];

numbers.sort((a, b) => a - b);
console.log(numbers);
