/*
Идентификаторы
Объявите переменную и запишите в нее свое имя как литерал строки.
Объявите константу и запишите в нее год своего рождения как литерал числа.
Создайте функцию, которая печатает приветствие и имеет один аргумент: name.
*/
var firstname = 'Олег';
var dateyear = 1886;
var greeting = function (firstname) { return ("\u041F\u0440\u0438\u0432\u0435\u0442, ".concat(firstname)); };
greeting(firstname);
/*
Циклы
Реализуйте функцию range(start: number, end: number): array которая отдает массив чисел из диапазона [15, 30] включая крайние числа.
Реализуйте функцию rangeOdd(start: number, end: number): array которая отдает массив нечетных чисел из диапазона [15, 30] включая крайние числа.

[...Array(end - start + 1)]

*/
var range = function (start, end) { return new Array(end - start + 1).map(function (el, i) { return start + i; }); };
console.dir(range(1, 9));
