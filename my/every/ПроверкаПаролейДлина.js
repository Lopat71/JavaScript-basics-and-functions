// 9. Проверка паролей на длину
// * Задача: Дан массив строк ['password123', 'letmein', '123456']. Используя метод every(), проверьте, имеют ли все пароли длину не менее 8 символов.

let passwords = ["password123", "letmein", "123456"];
let validpasswords = passwords.every((password) => password >= 8);
console.log(validpasswords);
