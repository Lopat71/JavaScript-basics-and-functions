// 5. Работа со стеком (LIFO)
// * Задача: Дан массив строк ['first', 'second', 'third']. Используйте метод pop(), чтобы вывести строки в порядке "последний вошел — первый вышел" (LIFO). Выведите каждый удаленный элемент.

let fruits = ["first", "second", "third"];

while (fruits.length > 0) {
    let removedElement = fruits.pop();
    console.log(removedElement);
}
