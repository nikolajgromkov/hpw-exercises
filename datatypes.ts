/*Подготовьте две реализации функции inc:

C сигнатурой inc(n: number): number, пример вызова: const a = 5; const b = inc(a); console.dir({ a, b });
C сигнатурой inc(num: Num), где Num является объектом с полем n, чтобы функция изменила поле исходного объекта переданного по ссылке, пример вызова const obj = { n: 5 }; inc(obj); console.dir(obj);*/

const inc = (n: number): number => {
    return ++n;
}

const a: number = 5;
const b: number = inc(a);

console.dir({a, b});


type Num = {
    n: number;
}

const obj = { n: 5 }

const inc2 = (num: Num) => {
    num.n += 1;
}

inc2(obj);

console.dir(obj);


/*
Подсчет элементов различных типов в массиве.
Создайте исходный массив, содержащий значения различных типов, в качестве элементов, например: [true, 'hello', 5, 12, -200, false, false, 'word'] но желательно более длинный и разнообразный.
Создайте объект-коллекцию (хеш) с именами типов в виде ключей и 0 в качестве значения, например: { number: 0, string: 0, boolean: 0 }
Пройдитесь по массиву циклом for..of и для каждого элемента массива, увеличивайте соответствующее значение в объекте-коллекции.
*/

const data:(boolean | number | string | object)[] = [true, 'hello', 5, 12, -200, false, false, 'word', [1,2], {a:3}, {b:5}, ];

type datatypeCollection = {
    number: number,
    string: number,
    boolean: number,
    object: number,
    bigint: number,
    symbol: number,
    undefined: number,
    function: number
}

const datatypes:datatypeCollection = {
    number: 0,
    string: 0,
    boolean: 0,
    object: 0,
    bigint: 0,
    symbol: 0,
    undefined: 0,
    function: 0

}

for (let item of data) {
    datatypes[typeof item] += 1;
}

console.dir(datatypes);

/*
Измените пример: удалите все ключи из начальной коллекции и добавляйте их динамически в цикле.
*/



const datatypes2:any = {}

for (let item of data) {
    let itemType = typeof item;
    if (!(itemType in datatypes2)) datatypes2[itemType] = 0;
    datatypes2[itemType] += 1;

}

console.dir(datatypes2);