// Удаление и добавление одновременно: У вас есть массив pets = ['dog', 'cat', 'rabbit']. Удалите cat и добавьте hamster на его место. Как будет выглядеть новый массив?

// let pets = ['dog', 'cat', 'rabbit'];
// // Удалите 'cat' и добавьте 'hamster'

let pets = ["dog", "cat", "rabbit"];

pets.splice(1, 1, "hamster");
console.log(pets);
