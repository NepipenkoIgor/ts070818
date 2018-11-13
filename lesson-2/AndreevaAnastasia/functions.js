"use strict";
// Обратите внимание на типизацию и подключите ts-lint (проверяем включен ли плагин в редакторе)
// Все должно быть строго как на занятии, никаких any;
// 1)Написать функцию isInArray(), которая начиная со второго принимает переменное количество аргументов.
//   Возвращает true, если все аргументы, кроме первого входят в первый.
//   Первым всегда должен быть массив.
function isInArray(myArray, ...params) {
    if (params.length === 0) {
        return false;
    }
    return params.every((value) => {
        return myArray.indexOf(value) >= 0;
    });
}
let arr = [1, 2, 3];
console.log(`Проверка на true`, isInArray(arr, 3));
console.log(`Проверка на false`, isInArray(arr));
console.log(`Проверка на false`, isInArray(arr, 1, 2, 4));
function summator(...params) {
    let paramsSum = 0;
    for (let i = 0; i < params.length; i++) {
        const changeToNumber = +params[i];
        isNaN(changeToNumber) ? paramsSum += 0 : paramsSum += changeToNumber;
    }
    return paramsSum;
}
console.log(`Проверка, сумма = 19`, summator(`5`, 5, '2', '7', `wow`));
// 3)Написать функцию getUnique(arr), которая принимает аргументом неограниченое число аргументов,
//   и возвращает массив уникальных элементов. Аргумент не должен изменяться.
//   Порядок элементов результирующего массива должен совпадать с порядком,
//   в котором они встречаются в оригинальной структуре.
function getUnique(...params) {
    return params.filter((value, index, array) => {
        return array.indexOf(value) === index;
    });
}
console.log(`Проверка [5, 7, 9]`, getUnique(5, 5, 7, 9));
console.log(`Проверка ["wow", "yami", "gaga", "check"]`, getUnique(`wow`, `yami`, `gaga`, `gaga`, `check`));
function getReverseString(sentence) {
    // регулярка на цифры и спец символы
    const regExpSymbols = /\d|\%|\@|\$|\^|\!/gi;
    // запоминаем в отдельный массив цифры и спец символы
    const notReverseSymbols = getNotReverseSymbols(sentence, regExpSymbols);
    // убираем цифры и символы из строки, разбиваем строку на массив слов
    const stringWords = getStringWords(sentence, regExpSymbols);
    // разбиваем слово на массив букв, переворачиваем массив, собираем из массива строку
    const reverseStringWords = getReverseWords(stringWords);
    // собираем из массива слов строку
    const reverseStringWordsSymbols = reverseStringWords.join(` `).split(``);
    // вставляем в полученную строку цифры и символы на соответствующие им места (индексы)
    for (let i = 0; i < notReverseSymbols.length; i++) {
        reverseStringWordsSymbols.splice(notReverseSymbols[i].index, 0, notReverseSymbols[i].value);
    }
    return reverseStringWordsSymbols.join(``);
}
function getNotReverseSymbols(sentence, regExp) {
    const result = [];
    for (let i = 0; i < sentence.length; i++) {
        if (sentence[i].match(regExp)) {
            const notReverseSymbol = {
                index: i,
                value: sentence[i]
            };
            result.push(notReverseSymbol);
        }
    }
    return result;
}
function getStringWords(sentence, regExp) {
    return sentence.replace(regExp, ``).split(` `);
}
function getReverseWords(words) {
    return words.map((word) => {
        console.log(word);
        return word.split(``).reverse().join(``);
    });
}
console.log(`Проверка 1) s1tar3t 2 hellow  ->  t1rat3s 2 wolleh : `, getReverseString(`s1tar3t 2 hellow`));
console.log(`Проверка 2) s1ta$%r3t 2 hel^low  ->  t1ra$%t3s 2 wol^leh : `, getReverseString(`s1ta$%r3t 2 hel^low`));
console.log(`Проверка 3) s1tar3t 2   low5  ->  t1rat3s 2   wol5 : `, getReverseString(`s1tar3t 2   low5`));
