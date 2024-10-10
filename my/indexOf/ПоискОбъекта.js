// 9. Поиск объекта
//     * Дано: массив const objects = [{ id: 1 }, { id: 2 }, { id: 3 }];.
//     * Задача: Найдите индекс объекта { id: 2 }. Какой будет результат? (Подсказка: используйте JSON.stringify() для сравнения объектов.)

const objects = [{ id: 1 }, { id: 2 }, { id: 3 }];
const target = { id: 2 };

// Используем метод findIndex, чтобы сравнивать строки объектов
const index = objects.findIndex(obj => JSON.stringify(obj) === JSON.stringify(target));

console.log(index); // Выведет: 1

