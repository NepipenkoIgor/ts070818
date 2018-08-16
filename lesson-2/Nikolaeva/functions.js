"use strict";
function isInArray(array, ...elements) {
    return elements.every((element) => array.indexOf(element) !== -1);
}
function summator(...elements) {
    let sum = 0;
    elements.forEach((element) => {
        sum += !isNaN(+element) ? +element : 0;
    });
    return sum;
}
function getUnique(...elements) {
    const map = new Map();
    const result = [];
    elements.forEach((element) => {
        map.set(element, 1);
    });
    for (const element of map.keys()) {
        result.push(element);
    }
    return result;
}
function invert(str) {
    const arrStr = str.split('');
    let words = [];
    let wordArray = [];
    let resultStr = '';
    arrStr.forEach((e) => {
        if (e === ' ') {
            words.push(wordArray);
            words.push([' ']);
            wordArray = [];
        }
        else {
            wordArray.push(e);
        }
    });
    words.push(wordArray);
    words = words.map((word) => {
        const letters = [];
        word.forEach((letter) => {
            if (!!(letter).match(/[a-z]/i)) {
                letters.push(letter);
            }
        });
        return word.map((letter) => {
            if (!!(letter).match(/[a-z]/i)) {
                return letters.pop();
            }
            else {
                return letter;
            }
        });
    });
    words.forEach((word) => {
        resultStr += word.join('');
    });
    return resultStr;
}
