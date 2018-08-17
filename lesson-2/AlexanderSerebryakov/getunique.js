"use strict";
/**
 * Написать функцию getUnique(arr), которая принимает аргументом неограниченое число аргументов,
 * и возвращает массив уникальных элементов. Аргумент не должен изменяться.
 * Порядок элементов результирующего массива должен совпадать с порядком,
 * в котором они встречаются в оригинальной структуре.
 */
function getUnique(arr) {
    const res = [];
    const uniq = new Map();
    for (const v of arr) {
        uniq.set(v, true);
    }
    uniq.forEach((v, k) => {
        res.push(k);
    });
    return res;
}
console.log(getUnique([1, 3, 5, 67, 3, 45, 5, 98, 22]));
// console.log(getUnique<string>([1, 3, 5, 67, 3, 45, 5, 98, 22])); // tslint ERROR
console.log(getUnique(['sd', '4', '45345rtfgr', '4', 'gg', 'sd'])); //["sd", "4", "45345rtfgr", "gg"]
