// Обратите внимание на типизацию и подключите ts-lint (проверяем включен ли плагин в редакторе)
// Все должно быть строго как на занятии, никаких any;
// 1)
//   Написать функцию isInArray(), которая начиная со второго принимает переменное количество аргументов.
//   Возвращает true, если все аргументы, кроме первого входят в первый.
//   Первым всегда должен быть массив.

// Решение:

function isInArray<T>(array: T[], ...params: T[]): boolean {
    function isIncludeInArray(item: T): boolean  {
        return array.indexOf(item) !== -1;
    }
    return params.every(isIncludeInArray);
}

const myArray1: number[] = [1, 3, 5, 7, 9];

console.log(`_______  Задача 1 _______ `);

console.log(`isInArray<number>(myArray1, 3, 7, 9) = `
            + isInArray<number>(myArray1, 3, 7, 9)); // true
console.log(`isInArray<number>(myArray1, 3, 8, 9) = `
            + isInArray<number>(myArray1, 3, 8, 9)); // false

console.log(``);
console.log(`_______  _______  _______ `);

// 2)
//  Написать функцию summator(), которая сумирует переданые ей аргументы.
//  Аргументы могут быть либо строкового либо числового типа. Количество их не ограничено. Проверяйте NaN

// Решение:

function summator(...params: (string | number)[]): string | number {
    let result: number = 0;
    for (let i = 0;  i <= params.length - 1; i++) {
        const operand: number = +params[i];
        if (isNaN(operand)) {
            return `Ошибка. Один из введенных параметров - не является числом. Повторите попытку.`;
        } else {
            result += operand;
        }
    }
    return result;
}

console.log(`_______  Задача 2 _______ `);

console.log(`summator(1, 2, 3, 4) = ` + summator(1, 2, 3, 4)); // 10
console.log(`summator('1', 2, '3', 4) = ` + summator(`1`, 2, `3`, 4)); // 10
console.log(`summator('1.101', 2, '3.303', 4.404) = ` + summator('1.101', 2, '3.303', 4.404)); // 10.808
console.log(`summator(1, 'qwerty2', 3, 4) = ` + summator(1, `qwerty2`, 3, 4)); // Ошибка...

console.log(``);
console.log(`_______  _______  _______ `);


// 3)
//   Написать функцию getUnique(arr), которая принимает аргументом неограниченое число аргументов,
//   и возвращает массив уникальных элементов. Аргумент не должен изменяться.
//   Порядок элементов результирующего массива должен совпадать с порядком,
//   в котором они встречаются в оригинальной структуре.

// Решение:

function getUnique<T>(...params: T[]): T[] {
    const uniqueArray: T[] = params.filter(function(item: T, index: number, array: T[]): boolean {
        return array.indexOf(item) === index;
    });
    return uniqueArray;
}

console.log(`_______  Задача 3 _______ `);

console.log(`getUnique<number>(1, 2, 2, 3, 3, 3, 1) = `
            + getUnique<number>(1, 2, 2, 3, 3, 3, 1));
// 1,2,3
console.log(`getUnique<string>('js', 'js', 'ts', 'angular', 'angular', 'ts') = `
            + getUnique<string>(`js`, `js`, `ts`, `angular`, `angular`, `ts`));
// js,ts,angular
console.log(`getUnique<string | number>('js', 1, 1, 'js', 2, 3, 'ts', 'angular', 'angular', 'ts', 3) = `
            + getUnique<string | number>(`js`, 1, 1, `js`, 2, 3, `ts`, `angular`, `angular`, `ts`, 3));
// js,1,2,3,ts,angular

console.log(``);
console.log(`_______  _______  _______ `);


// 4)
//    Написать функцию котороя будет разворачивать буквы в словах предложения, но только лишь буквы
//    цифры и специальные символы должны остаться на месте
//       s1tar3t 2 hellow  ->  t1rat3s 2 wolleh
//       s1ta$%r3t 2 hel^low  ->  t1ra$%t3s 2 wol^leh
//       s1tar3t 2   low5  ->  t1rat3s 2   wol5

// Решение:

interface INotReserveSymbol {
    currentIndex: number;
    value: string;
}

function reverseString(currenString: string): string {

    const regExpNotReverse: RegExp = /\d|\%|\@|\$|\^|\!/gi; // цифры и спец символы

    const notReverseSymbols: INotReserveSymbol[] = getNotReverseSymbols(currenString, regExpNotReverse);
    const stringWords: string[] = getStringWords(currenString, regExpNotReverse);
    const reverseStringWords: string[] = reverseWords(stringWords);
    const reverseStringWordsSymbols: string[] = reverseStringWords.join(' ').split('');

    for (let i: number = 0; i < notReverseSymbols.length; i++) {
        reverseStringWordsSymbols.splice(notReverseSymbols[i].currentIndex, 0, notReverseSymbols[i].value);
    }
    return reverseStringWordsSymbols.join('');
}


function getNotReverseSymbols(currenString: string, regExp: RegExp): INotReserveSymbol[] {
    const result: INotReserveSymbol[] = [];

    for (let i: number = 0; i < currenString.length; i++) {
        if (currenString[i].match(regExp)) {
            const notReverseSymbol: INotReserveSymbol = {
                currentIndex: i,
                value: currenString[i]
            };
            result.push(notReverseSymbol);
        }
    }
    return result;
}

function getStringWords(currenString: string, regExp: RegExp): string[] {
    return currenString.replace(regExp, '').split(' ');
}

function reverseWords(words: string[]): string[] {
    return words.map(function(word: string): string {
        return word.split('').reverse().join('');
    });
}

console.log(`_______  Задача 4 _______ `);

console.log(`reverseString('s1tar3t 2 hellow') = `
            + reverseString(`s1tar3t 2 hellow`)); // t1rat3s 2 wolleh

console.log(`reverseString('s1ta$%r3t 2 hel^low') = `
            + reverseString(`s1ta$%r3t 2 hel^low`)); // t1ra$%t3s 2 wol^leh
            
console.log(`reverseString('s1tar3t 2   low5') = `
            + reverseString(`s1tar3t 2   low5`)); // t1rat3s 2   wol5

console.log(``);
console.log(`_______  _______  _______ `);
