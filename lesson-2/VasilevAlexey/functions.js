"use strict";
// Обратите внимание на типизацию и подключите ts-lint (проверяем включен ли плагин в редакторе)
// Все должно быть строго как на занятии, никаких any;
// 1)
//   Написать функцию isInArray(), которая начиная со второго принимает переменное количество аргументов.
//   Возвращает true, если все аргументы, кроме первого входят в первый.
//   Первым всегда должен быть массив.
// Решение:
function isInArray(array) {
    var params = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        params[_i - 1] = arguments[_i];
    }
    function isIncludeInArray(item) {
        return array.indexOf(item) !== -1;
    }
    return params.every(isIncludeInArray);
}
var myArray1 = [1, 3, 5, 7, 9];
console.log("_______  \u0417\u0430\u0434\u0430\u0447\u0430 1 _______ ");
console.log("isInArray<number>(myArray1, 3, 7, 9) = "
    + isInArray(myArray1, 3, 7, 9)); // true
console.log("isInArray<number>(myArray1, 3, 8, 9) = "
    + isInArray(myArray1, 3, 8, 9)); // false
console.log("");
console.log("_______  _______  _______ ");
// 2)
//  Написать функцию summator(), которая сумирует переданые ей аргументы.
//  Аргументы могут быть либо строкового либо числового типа. Количество их не ограничено. Проверяйте NaN
// Решение:
function summator() {
    var params = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        params[_i] = arguments[_i];
    }
    var result = 0;
    for (var i = 0; i <= params.length - 1; i++) {
        var operand = +params[i];
        if (isNaN(operand)) {
            return "\u041E\u0448\u0438\u0431\u043A\u0430. \u041E\u0434\u0438\u043D \u0438\u0437 \u0432\u0432\u0435\u0434\u0435\u043D\u043D\u044B\u0445 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u043E\u0432 - \u043D\u0435 \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0447\u0438\u0441\u043B\u043E\u043C. \u041F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u0435 \u043F\u043E\u043F\u044B\u0442\u043A\u0443.";
        }
        else {
            result += operand;
        }
    }
    return result;
}
console.log("_______  \u0417\u0430\u0434\u0430\u0447\u0430 2 _______ ");
console.log("summator(1, 2, 3, 4) = " + summator(1, 2, 3, 4)); // 10
console.log("summator('1', 2, '3', 4) = " + summator("1", 2, "3", 4)); // 10
console.log("summator('1.101', 2, '3.303', 4.404) = " + summator('1.101', 2, '3.303', 4.404)); // 10.808
console.log("summator(1, 'qwerty2', 3, 4) = " + summator(1, "qwerty2", 3, 4)); // Ошибка...
console.log("");
console.log("_______  _______  _______ ");
// 3)
//   Написать функцию getUnique(arr), которая принимает аргументом неограниченое число аргументов,
//   и возвращает массив уникальных элементов. Аргумент не должен изменяться.
//   Порядок элементов результирующего массива должен совпадать с порядком,
//   в котором они встречаются в оригинальной структуре.
// Решение:
function getUnique() {
    var params = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        params[_i] = arguments[_i];
    }
    var uniqueArray = params.filter(function (item, index, array) {
        return array.indexOf(item) === index;
    });
    return uniqueArray;
}
console.log("_______  \u0417\u0430\u0434\u0430\u0447\u0430 3 _______ ");
console.log("getUnique<number>(1, 2, 2, 3, 3, 3, 1) = "
    + getUnique(1, 2, 2, 3, 3, 3, 1));
// 1,2,3
console.log("getUnique<string>('js', 'js', 'ts', 'angular', 'angular', 'ts') = "
    + getUnique("js", "js", "ts", "angular", "angular", "ts"));
// js,ts,angular
console.log("getUnique<string | number>('js', 1, 1, 'js', 2, 3, 'ts', 'angular', 'angular', 'ts', 3) = "
    + getUnique("js", 1, 1, "js", 2, 3, "ts", "angular", "angular", "ts", 3));
// js,1,2,3,ts,angular
console.log("");
console.log("_______  _______  _______ ");
function reverseString(currenString) {
    var regExpNotReverse = /\d|\%|\@|\$|\^|\!/gi; // цифры и спец символы
    var notReverseSymbols = getNotReverseSymbols(currenString, regExpNotReverse);
    var stringWords = getStringWords(currenString, regExpNotReverse);
    var reverseStringWords = reverseWords(stringWords);
    var reverseStringWordsSymbols = reverseStringWords.join(' ').split('');
    for (var i = 0; i < notReverseSymbols.length; i++) {
        reverseStringWordsSymbols.splice(notReverseSymbols[i].currentIndex, 0, notReverseSymbols[i].value);
    }
    return reverseStringWordsSymbols.join('');
}
function getNotReverseSymbols(currenString, regExp) {
    var result = [];
    for (var i = 0; i < currenString.length; i++) {
        if (currenString[i].match(regExp)) {
            var notReverseSymbol = {
                currentIndex: i,
                value: currenString[i]
            };
            result.push(notReverseSymbol);
        }
    }
    return result;
}
function getStringWords(currenString, regExp) {
    return currenString.replace(regExp, '').split(' ');
}
function reverseWords(words) {
    return words.map(function (word) {
        return word.split('').reverse().join('');
    });
}
console.log("_______  \u0417\u0430\u0434\u0430\u0447\u0430 4 _______ ");
console.log("reverseString('s1tar3t 2 hellow') = "
    + reverseString("s1tar3t 2 hellow")); // t1rat3s 2 wolleh
console.log("reverseString('s1ta$%r3t 2 hel^low') = "
    + reverseString("s1ta$%r3t 2 hel^low")); // t1ra$%t3s 2 wol^leh
console.log("reverseString('s1tar3t 2   low5') = "
    + reverseString("s1tar3t 2   low5")); // t1rat3s 2   wol5
console.log("");
console.log("_______  _______  _______ ");
