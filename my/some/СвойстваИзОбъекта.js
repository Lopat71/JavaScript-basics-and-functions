// Задача 10: Проверка состояния задач
// Условие: У вас есть массив объектов задач:

// const tasks = [
//   { title: "Task 1", status: "completed" },
//   { title: "Task 2", status: "in progress" },
//   { title: "Task 3", status: "completed" }
// ];
// Задание: Напишите функцию, которая проверяет, есть ли хотя бы одна задача со статусом "in progress".

const tasks = [
    { title: "Task 1", status: "completed" },
    { title: "Task 2", status: "in progress" },
    { title: "Task 3", status: "completed" },
];

function TaskStatus(tasks) {
    return tasks.some((task) => task.status === "in progress");
}

console.log(TaskStatus(tasks));
