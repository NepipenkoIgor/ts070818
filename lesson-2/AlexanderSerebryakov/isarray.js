"use strict";
/**
 * Написать функцию isInArray(), которая начиная со второго принимает переменное количество аргументов.
 * Возвращает true, если все аргументы, кроме первого входят в первый.
 * Первым всегда должен быть массив.
 */
function isInArray(arr, ...args) {
    const uniq = new Map();
    function isObject(a) {
        return a !== null && typeof a === 'object';
    }
    arr.map(function (value, index, array) {
        uniq.set((isObject(value) ? JSON.stringify(value) : value), true);
    });
    var tot = true;
    for (let entry of args) {
        if (uniq.get(isObject(entry) ? JSON.stringify(entry) : entry) !== true) {
            tot = false;
        }
    }
    return tot;
}
console.log(isInArray([1, 4, 5, 6, 5], 5, 7, 8)); // false
//console.log(isInArray<number>([1, 4, 5, 6], 5, 'r345')); // WITH ERROR
console.log(isInArray(['dfgd', '4', '5', 'dfgd', '6SDDD'], '5', '6SDDD')); // true
console.log(isInArray([
    { field1: 'sss', field2: 1 },
    { field1: 'aaa', field2: 4 }
], { field1: 'sss', field2: 1 }));
