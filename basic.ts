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
*/

const rangeMap = (start:number, end:number): number[] => 
    [...Array(end - start + 1)].map((_,i) => start + i);


const rangeFor = (start:number, end:number): number[] => {
    let array = [];
    for (start; start <= end; start++) array.push(start);
    return array;
}


const rangeRecursive = (start:number, end:number): number[] => {
    if (start === end) return [start];
    return [start, ...rangeRecursive(start + 1, end)];
}


const perfomanceTest = (tests:number, limit:number, mark: string, f: (start:number, end:number) => void) => {
    console.time(mark);
    for(let i=0; i < tests; i++) {    
        f(1, limit);
    }
    console.timeEnd(mark);
}

console.log('Perfomance test:');
perfomanceTest(5, 100, 'map', rangeMap);
perfomanceTest(5, 100, 'for', rangeFor);
perfomanceTest(5, 100, 'recursive', rangeRecursive);
/*
Вот такие результаты:
rangeMap: 0.428ms 😬
rangeFor: 0.296ms 😍
rangeRecursive: 3.029ms ☠️
*/


/*
Реализуйте функцию rangeOdd(start: number, end: number): array которая отдает массив нечетных чисел из диапазона [15, 30] включая крайние числа.
*/

const rangeOdd = (start:number, end:number): number[] => {
    let array = [];
    for (let i = start; i <= end; i++) if (i % 2 == 0) array.push(i);
    return array;
}

console.log(rangeOdd(10,100));


/*
Вложенные вызовы функций в цикле
Реализуйте функцию average с сигнатурой average(a: number, b: number): number вычисляющую среднее арифметическое своих аргументов.
Реализуйте функцию square с сигнатурой square(x: number): number вычисляющую квадрат своего аргумента.
Реализуйте функцию cube с сигнатурой cube(x: number): number вычисляющую куб своего аргумента.
Вызовите функции square и cube в цикле от 0 до 9, вычисляя, соответственно квадрат и куб от переменной цикла. Передайте квадрат и куб на каждой итерации в функцию average. Результаты сложите в массив и возвратите из функции calculate.
*/

const average = (a: number, b: number): number => (a + b) / 2
const square = (x: number): number => x**2
const cube = (x: number): number => x**3
const calculate = ():number[] => {
    let results = [];
    for(let x = 0; x < 9; x++) results.push(average(square(x),cube(x)))
    return results;
}
console.dir(calculate())

/*
Выполнить следующие пункты внутри функции fn (см. заготовку: 7-objects.js)
Создайте объект с одним полем name и присвойте его в константу.
Создайте объект с одним полем name и присвойте его в переменную.
Попробуйте поменять поле name у обоих объектов.
Попробуйте присвоить другой объект в оба идентификатора.
Объясните поведение кода и оставьте только рабочий код.
Реализуйте функцию createUser с сигнатурой createUser(name: string, city: string): object. Пример вызова: createUser('Marcus Aurelius', 'Roma') функция должна вернуть объект { name: 'Marcus Aurelius', city: 'Roma' }
*/
const kirill = {name: 'Kirill'};
let slava = {name: 'Slava'};
kirill.name = 'Slava';
slava.name = 'Kirill';
slava = {name: 'Misha'}
console.dir({kirill});
console.dir({slava});

const createUser = (name: string, city: string) => ({name: name, city: city})
console.dir(createUser('Ksusha', 'Irkutsk'));

/*
Реализуйте телефонную книгу на массиве объектов.
Объявите массив объектов с двумя полями: name и phone для хранения телефонной книги. Пример объекта: { name: 'Marcus Aurelius', phone: '+380445554433' } и добавьте несколько объектов в массив, чтоб было на чем проверять.
Реализуйте функцию findPhoneByName с сигнатурой findPhoneByName(name: string): string. При вызове функция должна находить объект, где поле name равно аргументу name и возвращать номер телефона из объекта. Для поиска воспользуйтесь циклом for. A. Реализуйте телефонную книгу на хеш-таблицах, т.е. справочниках (объектах).
Задайте справочник (объект) с ключами равными значениям поля name (из предыдущего примера) и значениями равными полю phone.
Реализуйте функцию findPhoneByName с сигнатурой findPhoneByName(name: string): string которая находит телефон в хеше по имени и возвращает номер телефона. Используйте hash[key] для поиска телефона.
*/

const book = [
    { name: 'Ksenia',    phone: '+79000000000' },
    { name: 'Nikolas',   phone: '+79025700000' },
    { name: 'Bert',      phone: '+79500007722' },
    { name: 'Dmitriy',   phone: '+79995670000' },
]
const findPhoneByName = (name: string): string => {
    for(let person of book) {
        if (name === person.name) return person.phone;
    }
}
console.dir(findPhoneByName('Bert'));

const book2 = {
    'Ksenia': '+79000000000',
    'Nikolas': '+79025700000',
    'Bert': '+79500007722',
    'Dmitriy': '+79995670000',
}

const findPhoneByHashName = (name: string): string => book2[name] ? book2[name] : undefined;
console.dir(findPhoneByHashName('Bert'));