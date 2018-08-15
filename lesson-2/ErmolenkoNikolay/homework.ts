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

    //.includes(false) ругается на тип boolean[]
    return args.map(
        (v: T) => uniq.get(isObject(v) ? JSON.stringify(v) : v) === true
    ).indexOf(false) === -1;
}


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
