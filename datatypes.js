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
