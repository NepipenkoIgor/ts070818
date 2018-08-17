/**
 * Lesson 2 homework
 */
/**
 * Task 1
 * Написать функцию isInArray(), которая начиная со второго принимает
 * переменное количество аргументов.
 * Возвращает true, если все аргументы, кроме первого входят в первый.
 * Первым всегда должен быть массив.
 */
/**
 * Проверяет, что все значения из rest присутствуют в arr
 * @param {T[]} arr - первый параметр - массив значений
 * @param {T} rest - переданные значения после первого параметра
 * @returns {boolean} true - если все аргументы кроме первого входят в первый, иначе false
 */
function isInArray(arr) {
    var rest = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        rest[_i - 1] = arguments[_i];
    }
    return rest.every(function (item) {
        return !!(~arr.indexOf(item));
    });
}
// Task 1 Validation
// tslint:disable-next-line
console.log('Task 1 Validation: isInArray');
// tslint:disable-next-line
console.log(" 1, 0, 9 in array [7, 0, 1] is " + isInArray([7, 0, 1], 1, 0, 9) + " ");
// tslint:disable-next-line
console.log("'s', 1, 3, 's' in array [1, 's', 3] is " + isInArray([1, 's', 3], 's', 1, 3, 's') + " ");
function summator() {
    var rest = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        rest[_i] = arguments[_i];
    }
    var sum = 0;
    rest.forEach(function (item) {
        if (typeof item === 'number') {
            sum += item;
        }
        else {
            var num = parseFloat(item);
            if (!isNaN(num)) {
                sum += num;
            }
        }
    });
    return sum;
}
// Task 2 Validation
// tslint:disable-next-line
console.log('\nTask 2 Validation: summator');
// tslint:disable-next-line
console.log("Sum of 5, 3, 2 is " + summator(5, 3, 2));
// tslint:disable-next-line
console.log("Sum of '7', 4, 's0', '10ss' is " + summator('7', 4, 's0', '10ss'));
// tslint:disable-next-line
console.log("Sum of 0, -1, -8.5 is " + summator(0, -1, -8.5));
/**
 * Task 3
 * Написать функцию getUnique(arr), которая принимает аргументом
 * неограниченое число аргументов, и возвращает массив уникальных элементов.
 * Аргумент не должен изменяться.
 * Порядок элементов результирующего массива должен совпадать с порядком,
 * в котором они встречаются в оригинальной структуре.
 */
/**
 * Возвращает массив уникальных значений из переданных аргументов
 * Solution 1 (using ES6 Set structure)
 * @param {T} arr - список передаваемых аргументов
 * @returns {T[]} - массив уникальных элементов
 */
// function getUnique<T>(...arr: T[] ): T[] {
//     return [...new Set(arr)];
// }
//
// // tslint:disable-next-line
// console.log( getUnique('s', 'sd', '1', 'sd', 's') );
/**
 * Возвращает массив уникальных значений из переданных аргументов
 * Solution 2
 * @param {T} arr - список передаваемых аргументов
 * @returns {T[]} - массив уникальных элементов
 */
function getUnique() {
    var arr = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arr[_i] = arguments[_i];
    }
    var unique = [];
    arr.forEach(function (item) {
        if (!~unique.indexOf(item)) {
            unique.push(item);
        }
    });
    return unique;
}
// Task 3 Validation
// tslint:disable-next-line
console.log('\nTask 3 Validation: getUnique');
// tslint:disable-next-line
console.log("Unique elements of 'sd', '1', 'sd', 'x', '1' is " + getUnique('sd', '1', 'sd', 'x', '1') + " ");
// tslint:disable-next-line
console.log("Unique elements of 100, 0, 56, 29, 56, 4, 1, 4, 100 is " + getUnique(100, 0, 56, 29, 56, 4, 1, 4, 100) + " ");
/**
 * Task 4
 * Написать функцию, котороя будет разворачивать буквы в словах предложениях,
 * но только лишь буквы, цифры и специальные символы должны остаться на месте
 * s1tar3t 2 hellow  ->  t1rat3s 2 wolleh
 * s1ta$%r3t 2 hel^low  ->  t1ra$%t3s 2 wol^leh
 * s1tar3t 2   low5  ->  t1rat3s 2   wol5
 */
/**
 * Разворачивает буквы без спецсимволов и цифр в строке
 * @param {string} str - принимаемая строка
 * @returns {string} - преобразованная строка
 */
function reverseText(str) {
    var words = str.split(/\s+/);
    var result = str;
    function isSpecialSymbol(symbol) {
        return !/^[a-zA-Zа-яА-Я]+$/.test(symbol);
    }
    words.forEach(function (word) {
        var symbols = {};
        var specialSymbolsRegexp = /[^a-zA-Zа-яА-Я]/g;
        for (var i = 0; i < word.length; ++i) {
            if (isSpecialSymbol(word[i])) {
                symbols[i] = word[i];
            }
        }
        var wordWithoutSpecialSymbols = word.replace(specialSymbolsRegexp, '');
        var reversedWordArray = wordWithoutSpecialSymbols.split('').reverse();
        if (Object.keys(symbols).length) {
            for (var i in symbols) {
                reversedWordArray.splice(+i, 0, '' + symbols[i]);
            }
        }
        var resultWord = reversedWordArray.join('');
        result = result.replace(word, resultWord);
    });
    return result;
}
// Task 4 Validation
// tslint:disable-next-line
console.log('\nTask 4 Validation: reverseText');
// tslint:disable-next-line
console.log("s1tar3t 2 hellow -> " + reverseText('s1tar3t 2 hellow'));
// tslint:disable-next-line
console.log("s1ta$%r3t 2 hel^low -> " + reverseText('s1ta$%r3t 2 hel^low'));
// tslint:disable-next-line
console.log("s1tar3t 2   low5 -> " + reverseText('s1tar3t 2   low5'));
