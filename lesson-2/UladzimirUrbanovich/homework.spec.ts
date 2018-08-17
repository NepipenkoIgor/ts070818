import { isInArray } from './isInArray';
import { summator } from './summator';
import { getUnique } from './getUnique';
import { reverseSentence } from './reverse';
import 'jasmine';


describe('Homework tests:', () => {


    describe('isInArray function', () => {

        const testArray: any[] = [1, 2, 3, 'test', true, 345, 'test2', null];
        const testArray2: string[] = ['test1', 'test2', 'test3', 'test4', 'test5'];

        it('should return true if all arguments exists in array', () => {
            expect( isInArray(testArray, 3, null, 'test')).toBe(true);
            expect( isInArray(testArray, true, 2, 1)).toBe(true);
            expect( isInArray(testArray2, 'test2', 'test3', 'test1')).toBe(true);
            expect( isInArray(testArray2, 'test5', 'test4', 'test1', 'test5')).toBe(true);
        });

        it('should return false if some argument does not exist in array', () => {
            expect( isInArray(testArray, 3, null, 'test123')).toBe(false);
            expect( isInArray(testArray, 3, null, 'test', undefined)).toBe(false);
            expect( isInArray(testArray2, 'test1', 'test2', 'test')).toBe(false);
            expect( isInArray(testArray2, '123')).toBe(false);
        });

        it('should return false if no arguments provided', () => {
            expect( isInArray(testArray)).toBe(false);
        });
    });


    describe('summator function', () => {

        it('should sums all number arguments', () => {
            const argumentsArray: number[] = [1, 2, 3, 4, 5];
            expect(summator(...argumentsArray)).toBe(15);
        });

        it('can accept NaN values', () => {
            const argumentsArray: number[] = [NaN, 2, 3, NaN, NaN];
            expect(summator(...argumentsArray)).toBe(5);
        });

        it('can accept string values', () => {
            const argumentsArray: (number | string)[] = ['test', 2, 3, '2', '3'];
            expect(summator(...argumentsArray)).toBe(10);
        });

        it('can accept floated numbers string values', () => {
            const argumentsArray: (number | string)[] = [ 2, 3, '2', '3.5', '.5'];
            expect(summator(...argumentsArray)).toBe(11);
        });

        it('can accept only correct floated numbers string values', () => {
            const argumentsArray: (number | string)[] = ['1qw', '1.3t', 'r1.4', '.', '2.', '4.tr'];
            expect(summator(...argumentsArray)).toBe(0);
        });
    });


    describe('getUnique function', () => {

        const firstArray: number[] = [1, 2, 3, 4, 2, 5, 4, 3, 2, 10];
        const secondArray: string[] = ['test1', 'test2', 'test3'];
        const result: number[] = [1, 2, 3, 4, 5, 10];

        it('should return array with unique values', () => {
            expect( getUnique(...firstArray)).toEqual(result);
        });

        it('doesn\'t change original array', () => {
            expect( getUnique(...firstArray) ).toEqual(result);
            expect( firstArray ).toEqual(firstArray);
        });

        it('saves ordering', () => {
            expect( getUnique(...secondArray) ).toEqual(secondArray);
        });
    });


    describe('reverseSentence function', () => {
        it('should revert sentence, but leave special symbols in their places', () => {
            expect( reverseSentence('s1tar3t 2 hellow')).toBe('t1rat3s 2 wolleh');
            expect( reverseSentence('s1ta$%r3t 2 hel^low')).toBe('t1ra$%t3s 2 wol^leh');
            expect( reverseSentence('s1tar3t 2   low5')).toBe('t1rat3s 2   wol5');
            expect( reverseSentence('s1t))ar3t 2   low5, wor\nld, hello.Yuh23uh'))
                .toBe('t1r))at3s 2   wol5, row\ndl, olleh.huh23uY');
        });
    });


});
