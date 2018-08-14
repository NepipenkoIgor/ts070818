"use strict";
// Обратите внимание на типизацию и подключите ts-lint (проверяем включен ли плагин в редакторе)
// Все должно быть строго как на занятии, никаких any;
// 1)   Написать функцию isInArray(), которая начиная со второго принимает переменное количество аргументов.
//      Возвращает true, если все аргументы, кроме первого входят в первый.
//      Первым всегда должен быть массив.
function isInArray(sourceArray) {
    var targetElements = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        targetElements[_i - 1] = arguments[_i];
    }
    if (targetElements.length === 0) {
        console.error('isInArray() function warning: targetElements is undefined');
        return false;
    }
    return targetElements.every(function (value) {
        return sourceArray.indexOf(value) >= 0;
    });
}
var mySourceArray = [1, 2, 3, 4, 10];
console.log('1. isInArray(): TRUE ::', isInArray(mySourceArray, 1, 2, 10, 3));
console.log('2. isInArray(): FALSE ::', isInArray(mySourceArray, 1, 2, 20));
console.log('3. isInArray(): FALSE ::', isInArray(mySourceArray, 100));
console.log('4. isInArray(): FALSE + warning ::', isInArray(mySourceArray));
function summator() {
    var values = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        values[_i] = arguments[_i];
    }
    var result = 0;
    for (var i = 0; i < values.length; i++) {
        var value = values[i];
        if (typeof value === 'number') {
            result += value;
        }
        else {
            var convertedValue = +value || 0;
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
function getUnique() {
    var sourceArray = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        sourceArray[_i] = arguments[_i];
    }
    var targetArray = [];
    sourceArray.forEach(function (value) {
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
function reverseWords(sentence) {
    var words = sentence.split(' ');
    var resultWords = [];
    words.forEach((function (word) {
        resultWords.push(reverseWord(word));
    }));
    return resultWords.join(' ');
}
function reverseWord(word) {
    var wordArray = word.split('');
    for (var i = 0; i < wordArray.length / 2; i++) {
        var mirrorIndex = wordArray.length - 1 - i;
        if (isLetter(wordArray[i]) && isLetter(wordArray[mirrorIndex])) {
            var tmp = wordArray[i];
            wordArray[i] = wordArray[mirrorIndex];
            wordArray[mirrorIndex] = tmp;
        }
    }
    return wordArray.join('');
}
function isLetter(symbol) {
    return symbol.match(/^[a-zA-Z]+$/) !== null;
}
console.log('1. Reverse function ::', reverseWords('s1tar3t 2 hellow'));
console.log('2. Reverse function ::', reverseWords('s1ta$%r3t 2 hel^low'));
console.log('3. Reverse function ::', reverseWords('s1tar3t 2   low5'));
