const func = require('./homework.js');

describe('Тесты для домашнего задания к лекции 2', () => {

    describe('Функция isInArray', () => {
        it(`Проверяет, что все значения, переданные во 2 и далее аргументах,
         присутствуют в массиве, переданном в 1 аргументе`, () => {
            expect( func.isInArray([7, 0, 1], 1, 0, 9) ).toBe(false);
            expect( func.isInArray([1, 's', 3], 's', 1, 3, 's') ).toBe(true);
            expect( func.isInArray([0, -2.5, 1, 6], -2.5, 6) ).toBe(true);
        });
    });

    describe('Функция summator', () => {
        it('Суммирует переданные аргументы', () => {
            expect( func.summator(5, 3, 2) ).toBe(10);
            expect( func.summator('7', 4, 's0', '10ss') ).toBe(21);
            expect( func.summator(0, -1, -8.5) ).toBe(-9.5);
        });
    });

    describe('Функция getUnique', () => {
        it('Возвращает массив уникальных значений из переданных аргументов', () => {
            expect( func.getUnique('sd', '1', 'sd', 'x', '1') ).toEqual(['sd', '1', 'x']);
            expect( func.getUnique(0, 56, 29, 56, 4, 1, 4) ).toEqual([0, 56, 29, 4, 1]);
        });
    });

    describe('Функция reverseText', () => {
        it('Разворачивает буквы без спецсимволов и цифр в строке', () => {
            expect( func.reverseText('s1tar3t 2 hellow') ).toBe('t1rat3s 2 wolleh');
            expect( func.reverseText('s1ta$%r3t 2 hel^low') ).toBe('t1ra$%t3s 2 wol^leh');
            expect( func.reverseText('s1tar3t 2   low5') ).toBe('t1rat3s 2   wol5');
        });
    });

});