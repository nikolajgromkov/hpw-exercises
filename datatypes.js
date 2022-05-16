/*Подготовьте две реализации функции inc:

C сигнатурой inc(n: number): number, пример вызова: const a = 5; const b = inc(a); console.dir({ a, b });
C сигнатурой inc(num: Num), где Num является объектом с полем n, чтобы функция изменила поле исходного объекта переданного по ссылке, пример вызова const obj = { n: 5 }; inc(obj); console.dir(obj);*/
var inc = function (n) {
    return ++n;
};
var a = 5;
var b = inc(a);
console.dir({ a: a, b: b });
var obj = { n: 5 };
var inc2 = function (num) {
    num.n += 1;
};
inc2(obj);
console.dir(obj);
/*
Подсчет элементов различных типов в массиве.
Создайте исходный массив, содержащий значения различных типов, в качестве элементов, например: [true, 'hello', 5, 12, -200, false, false, 'word'] но желательно более длинный и разнообразный.
Создайте объект-коллекцию (хеш) с именами типов в виде ключей и 0 в качестве значения, например: { number: 0, string: 0, boolean: 0 }
Пройдитесь по массиву циклом for..of и для каждого элемента массива, увеличивайте соответствующее значение в объекте-коллекции.
*/
var data = [true, 'hello', 5, 12, -200, false, false, 'word', [1, 2], { a: 3 }, { b: 5 }];
var datatypes = {
    number: 0,
    string: 0,
    boolean: 0,
    object: 0
};
for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
    var item = data_1[_i];
    datatypes[typeof item] += 1;
}
console.dir(datatypes);
var datatypes2 = {};
for (var _a = 0, data_2 = data; _a < data_2.length; _a++) {
    var item = data_2[_a];
    var itemType = typeof item;
    if (!(itemType in datatypes2))
        datatypes2[itemType] = 0;
    datatypes2[itemType] += 1;
}
console.dir(datatypes2);
