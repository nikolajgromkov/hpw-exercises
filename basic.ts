/*
Идентификаторы
Объявите переменную и запишите в нее свое имя как литерал строки.
Объявите константу и запишите в нее год своего рождения как литерал числа.
Создайте функцию, которая печатает приветствие и имеет один аргумент: name.
*/

let firstname = 'Олег';
const dateyear = 1886;

const greeting = (firstname: string) => (`Привет, ${firstname}`)

greeting(firstname);

/*
Циклы
Реализуйте функцию range(start: number, end: number): array которая отдает массив чисел из диапазона [15, 30] включая крайние числа.
Реализуйте функцию rangeOdd(start: number, end: number): array которая отдает массив нечетных чисел из диапазона [15, 30] включая крайние числа.

[...Array(end - start + 1)]

*/

const range = (start:number, end:number): number[] => new Array(end - start + 1).map((el, i) => start + i);
console.dir(range(1,9));