/**
 Задача "Chunk". Напишите функцию chunk(arr, size), которая принимает массив и число size, и возвращает новый массив,
 состоящий из подмассивов длиной не более size. Например, chunk([1, 2, 3, 4, 5], 2) должна вернуть [[1, 2], [3, 4], [5]].
 * */
function chunk(arr, size) {
    let redyArr = [[]];

    arr.forEach(function (currentNum) {
        const lastItem = redyArr.at(-1);
        if (lastItem.length < size) lastItem.push(currentNum);
        else redyArr.push([currentNum]);
    });

    return redyArr;
}
console.log(chunk([1, 2, 3], 2));
