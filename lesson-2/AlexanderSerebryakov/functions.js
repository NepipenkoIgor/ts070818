"use strict";
/**
 * �������� ������� getUnique(arr), ������� ��������� ���������� ������������� ����� ����������,
 * � ���������� ������ ���������� ���������. �������� �� ������ ����������.
 * ������� ��������� ��������������� ������� ������ ��������� � ��������,
 * � ������� ��� ����������� � ������������ ���������.
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
/*
  console.log(getUnique<number>([1, 3, 5, 67, 3, 45, 5, 98, 22]));
  console.log(getUnique<string>([1, 3, 5, 67, 3, 45, 5, 98, 22])); // tslint ERROR
  console.log(getUnique<string>(['sd', '4', '45345rtfgr', '4', 'gg', 'sd'])); //["sd", "4", "45345rtfgr", "gg"]
  */
/**
 * �������� ������� ������� ����� ������������� ����� � ������ �����������, �� ������ ���� �����
 * ����� � ����������� ������� ������ �������� �� �����
 *   s1tar3t 2 hellow  ->  t1rat3s 2 wolleh
 *   s1ta$%r3t 2 hel^low  ->  t1ra$%t3s 2 wol^leh
 *   s1tar3t 2   low5  ->  t1rat3s 2   wol5
 */
function reverseWords(str) {
    function reverseItem(item) {
        const arr = item.match(/[a-z�-��]/gi) || [];
        return item
            .split('')
            .map((v, i) => {
            return /([a-z�-��])/gi.test(item[i])
                ? arr.pop() || ''
                : v;
        })
            .join('');
    }
    return str.split(' ').map((v) => {
        return isNaN(parseFloat(v))
            ? reverseItem(v)
            : v;
    }).join(' ');
}
