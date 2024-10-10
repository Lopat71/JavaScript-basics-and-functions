// Задача 8: Проверка наличия символа @
// Условие: У вас есть массив строк:

// const emails = ["test@example.com", "hello@world.com", "test.com"];
// Задание: Напишите функцию, которая проверяет, есть ли хотя бы одна строка, содержащая символ @.

const emails = ["test@example.com", "hello@world.com", "test.com"];

function requaredSymbol(emails) {
    return emails.some((word) => word.includes("@"));
}

console.log(requaredSymbol(emails));
