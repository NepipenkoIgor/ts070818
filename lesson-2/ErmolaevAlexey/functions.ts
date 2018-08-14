// Обратите внимание на типизацию и подключите ts-lint (проверяем включен ли плагин в редакторе)
// Все должно быть строго как на занятии, никаких any;
// 1)   Написать функцию isInArray(), которая начиная со второго принимает переменное количество аргументов.
//      Возвращает true, если все аргументы, кроме первого входят в первый.
//      Первым всегда должен быть массив.

function isInArray<T>(sourceArray: T[], ...targetElements: T[]): boolean {
    if (targetElements.length === 0) {
        console.error('isInArray() function warning: targetElements is undefined');
        return false;
    }
    return targetElements.every((value: T) => {
        return sourceArray.indexOf(value) >= 0;
    });
}

let mySourceArray: number[] = [1, 2, 3, 4, 10];

console.log('1. isInArray(): TRUE ::', isInArray(mySourceArray, 1, 2, 10, 3));
console.log('2. isInArray(): FALSE ::', isInArray(mySourceArray, 1, 2, 20));
console.log('3. isInArray(): FALSE ::', isInArray(mySourceArray, 100));
console.log('4. isInArray(): FALSE + warning ::', isInArray(mySourceArray));

// 2)   Написать функцию summator(), которая сумирует переданые ей аргументы.
//      Аргументы могут быть либо строкового либо числового типа. Количество их не ограничено. Проверяйте NaN

type TSummatorItem = number | string;

function summator(...values: TSummatorItem[]): number {
    let result: number = 0;

    for (let i: number = 0; i < values.length; i++) {
        const value: TSummatorItem = values[i];

        if (typeof value === 'number') {
            result += value;
        } else {
            const convertedValue: number = +value || 0;
            result += convertedValue;
        }
    }

    return result;
}

console.log('1. summator() ::', summator(2, '2', 2, 'invalid'));

// 3)   Написать функцию getUnique(arr), которая принимает аргументом неограниченое число аргументов,
//      и возвращает массив уникальных элементов. Аргумент не должен изменяться.
//      Порядок элементов результирующего массива должен совпадать с порядком,
//      в котором они встречаются в оригинальной структуре.

function getUnique<T>(...sourceArray: T[]): T[] {
    const targetArray: T[] = [];

    sourceArray.forEach((value: T) => {
        if (targetArray.indexOf(value) < 0) {
            targetArray.push(value);
        }
    });

    return targetArray;
}

console.log('1. getUnique() ::', getUnique(1, 1, 2, 3, 4, null, 5, 5, 5, 5, 6, 6, 6, 6, 7, undefined));
console.log('2. getUnique() ::', getUnique(4, 4, 4));

// 4)   Написать функцию котороя будет разворачивать буквы в словах предложения, но только лишь буквы
//      цифры и специальные символы должны остаться на месте
//      s1tar3t 2 hellow  ->  t1rat3s 2 wolleh
//      s1ta$%r3t 2 hel^low  ->  t1ra$%t3s 2 wol^leh
//      s1tar3t 2   low5  ->  t1rat3s 2   wol5

function reverseWords(sentence: string): string {
    const words: string[] = sentence.split(' ');
    const resultWords: string[] = [];
    words.forEach(((word: string) => {
        resultWords.push(reverseWord(word));
    }));
    return resultWords.join(' ');
}

function reverseWord(word: string): string {
    const wordArray: string[] = word.split('');

    for (let i: number = 0; i < wordArray.length / 2; i++) {
        const mirrorIndex: number = wordArray.length - 1 - i;

        if (isLetter(wordArray[i]) && isLetter(wordArray[mirrorIndex])) {
            const tmp: string = wordArray[i];
            wordArray[i] = wordArray[mirrorIndex];
            wordArray[mirrorIndex] = tmp;
        }
    }
    return wordArray.join('');
}

function isLetter(symbol: string): boolean {
    return symbol.match(/^[a-zA-Z]+$/) !== null;
}

console.log('1. Reverse function ::', reverseWords('s1tar3t 2 hellow'));
console.log('2. Reverse function ::', reverseWords('s1ta$%r3t 2 hel^low'));
console.log('3. Reverse function ::', reverseWords('s1tar3t 2   low5'));