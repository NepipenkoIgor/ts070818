/**
 * Написать функцию isInArray(), которая начиная со второго принимает переменное количество аргументов.
 * Возвращает true, если все аргументы, кроме первого входят в первый.
 * Первым всегда должен быть массив.
 */
type User = {
    name: string;
    age?: number;
};

type Pay = {
    userId: number,
    user: User,
    orders?: number[]
};

function isInArray<T>(arr: ReadonlyArray<T>, ...args: T[]): boolean {

    const uniq: Map<T | string, boolean> = new Map();

    function isObject(a: T | object): a is object {
        return a !== null && typeof a === 'object';
    }

    arr.map((v: T) => uniq.set(
        (isObject(v) ? JSON.stringify(v) : v),
        true
    ));

    // .includes(false) ругается на тип boolean[]
    return args.map(
        (v: T) => uniq.get(isObject(v) ? JSON.stringify(v) : v) === true
    ).indexOf(false) === -1;
}

/*
console.log(isInArray<number>([1, 4, 5, 6, 5], 5, 7, 8)); // false
console.log(isInArray<number>([1, 4, 5, 6], 5, 'r345')); // WITH ERROR
console.log(isInArray<string>(['dfgd', '4', '5', 'dfgd', '6SDDD'], '5', '6SDDD')); // true
console.log(
    isInArray<User>([
        { name: 'Nik', age: 23 },
        { name: 'John' }
    ],
        { name: 'John' }
    )
);
console.log(
    isInArray<Pay>(
        [
            { userId: 2, user: { name: 'Nik', age: 35 }, orders: [23] },
            { userId: 3, user: { name: 'Alex' } }
        ],
        { userId: 2, user: { name: 'Nik', age: 35 }, orders: [23] }
    )
);
*/


/**
 * писать функцию summator(), которая сумирует переданые ей аргументы
 * Аргументы могут быть либо строкового либо числового типа. Количество их не ограничено. Проверяйте NaN
 */
function summator(...args: (string | number)[]): null | number {
    let res: number = 0;

    function isNumber(v: number | string): v is number {
        return typeof v === 'number';
    }

    for (const v of args) {
        if (isNumber(v)) {
            res += v;
        } else if (!isNaN(parseFloat(v))) {
            res += parseFloat(v);
        } else {
            return null;
        }
    }
    return res;
}
/*
console.log(summator(34, 6, 234)); //274
console.log(summator('34', '56.322', '6.345')); //96.667
console.log(summator('67', 6, '45', '-5.67', -347.55)); //-235.22000000000003
console.log(summator('rte67', 6, '45', '-5.67', -347.55)); // null
console.log(summator('rte67', { a: 345 }, '45', '-5.67', -347.55)); // null w tslint ERROR
*/





/**
 * Написать функцию getUnique(arr), которая принимает аргументом неограниченое число аргументов,
 * и возвращает массив уникальных элементов. Аргумент не должен изменяться.
 * Порядок элементов результирующего массива должен совпадать с порядком,
 * в котором они встречаются в оригинальной структуре.
 */
function getUnique<T>(arr: T[]): T[] {

    const res: T[] = [];

    const uniq: Map<T, boolean> = new Map();

    for (const v of arr) {
        uniq.set(v, true);
    }

    uniq.forEach((v: boolean, k: T) => {
        res.push(k);
    });
    return res;
}
/*
  console.log(getUnique<number>([1, 3, 5, 67, 3, 45, 5, 98, 22]));
  console.log(getUnique<string>([1, 3, 5, 67, 3, 45, 5, 98, 22])); // tslint ERROR
  console.log(getUnique<string>(['sd', '4', '45345rtfgr', '4', 'gg', 'sd'])); //["sd", "4", "45345rtfgr", "gg"]
  */


/**
 * Написать функцию котороя будет разворачивать буквы в словах предложения, но только лишь буквы
 * цифры и специальные символы должны остаться на месте
 *   s1tar3t 2 hellow  ->  t1rat3s 2 wolleh
 *   s1ta$%r3t 2 hel^low  ->  t1ra$%t3s 2 wol^leh
 *   s1tar3t 2   low5  ->  t1rat3s 2   wol5
 */


function reverseWords(str: string): string {
    function reverseItem(item: string): string {
        const arr: string[] = item.match(/[a-zа-яё]/gi) || [];
        return item
            .split('')
            .map((v: string, i: number) => {
                return /([a-zа-яё])/gi.test(item[i])
                    ? arr.pop() || ''
                    : v;
            })
            .join('');
    }

    return str.split(' ').map((v: string) => {
        return isNaN(parseFloat(v))
            ? reverseItem(v)
            : v;
    }).join(' ');
}
/*
console.log(reverseWords('s1tar3t 2 hellow'), '||', 't1rat3s 2 wolleh');
console.log(reverseWords('s1ta$%r3t 2 hel^low'), '||', 't1ra$%t3s 2 wol^leh');
console.log(reverseWords('s1tar3t 2   low5'), '||', 't1rat3s 2   wol5');
*/
