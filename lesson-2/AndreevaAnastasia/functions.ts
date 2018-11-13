// Обратите внимание на типизацию и подключите ts-lint (проверяем включен ли плагин в редакторе)
// Все должно быть строго как на занятии, никаких any;
// 1)Написать функцию isInArray(), которая начиная со второго принимает переменное количество аргументов.
//   Возвращает true, если все аргументы, кроме первого входят в первый.
//   Первым всегда должен быть массив.

    function isInArray<T> (myArray: T[], ...params: T[]): boolean {
        if (params.length === 0) {
            return false;
        }

        return params.every((value: T) => {
            return myArray.indexOf(value) >= 0;
        });
    }

    let arr: number[] = [1, 2, 3];

    console.log(`Проверка на true`, isInArray<number>(arr, 3));
    console.log(`Проверка на false`, isInArray<number>(arr));
    console.log(`Проверка на false`, isInArray<number>(arr, 1, 2, 4));


// 2)Написать функцию summator(), которая сумирует переданые ей аргументы.
// Аргументы могут быть либо строкового либо числового типа. Количество их не ограничено. Проверяйте NaN

type paramsType = number | string;

function summator(...params: paramsType[]): number {

    let paramsSum: number = 0;
    for (let i: number = 0; i < params.length; i++ ) {
        const changeToNumber: number = +params[i];
        isNaN(changeToNumber) ? paramsSum += 0 : paramsSum += changeToNumber;
    }
    return paramsSum;
}

console.log(`Проверка, сумма = 19`, summator(`5`, 5, '2', '7', `wow`));

// 3)Написать функцию getUnique(arr), которая принимает аргументом неограниченое число аргументов,
//   и возвращает массив уникальных элементов. Аргумент не должен изменяться.
//   Порядок элементов результирующего массива должен совпадать с порядком,
//   в котором они встречаются в оригинальной структуре.

function getUnique<T> (...params: T[]): T[] {

    return params.filter((value: T, index: number, array: T[]): boolean => {
        return array.indexOf(value) === index;
    });

}

console.log(`Проверка [5, 7, 9]`, getUnique<number>(5, 5, 7, 9));
console.log(`Проверка ["wow", "yami", "gaga", "check"]`, getUnique<string>(`wow`, `yami`, `gaga`, `gaga`, `check`));

// 4)Написать функцию котороя будет разворачивать буквы в словах предложения, но только лишь буквы
//    цифры и специальные символы должны остаться на месте
//       s1tar3t 2 hellow  ->  t1rat3s 2 wolleh
//       s1ta$%r3t 2 hel^low  ->  t1ra$%t3s 2 wol^leh
//       s1tar3t 2   low5  ->  t1rat3s 2   wol5

interface INotReserveSymbol {
    index: number;
    value: string;
}

function getReverseString(sentence: string): string {

    // регулярка на цифры и спец символы
    const regExpSymbols: RegExp = /\d|\%|\@|\$|\^|\!/gi;
    // запоминаем в отдельный массив цифры и спец символы
    const notReverseSymbols: INotReserveSymbol[] = getNotReverseSymbols(sentence, regExpSymbols);

    // убираем цифры и символы из строки, разбиваем строку на массив слов
    const stringWords: string[] = getStringWords(sentence, regExpSymbols);
    // разбиваем слово на массив букв, переворачиваем массив, собираем из массива строку
    const reverseStringWords: string[] = getReverseWords(stringWords);
    // собираем из массива слов строку
    const reverseStringWordsSymbols: string[] = reverseStringWords.join(` `).split(``);

    // вставляем в полученную строку цифры и символы на соответствующие им места (индексы)
    for (let i: number = 0; i < notReverseSymbols.length; i++) {
        reverseStringWordsSymbols.splice(notReverseSymbols[i].index, 0, notReverseSymbols[i].value);
    }
    return reverseStringWordsSymbols.join(``);
}


function getNotReverseSymbols(sentence: string, regExp: RegExp): INotReserveSymbol[] {
    const result: INotReserveSymbol[] = [];

    for (let i: number = 0; i < sentence.length; i++) {
        if (sentence[i].match(regExp)) {

            const notReverseSymbol: INotReserveSymbol = {
                index: i,
                value: sentence[i]
            };

            result.push(notReverseSymbol);
        }
    }
    return result;
}

function getStringWords(sentence: string, regExp: RegExp): string[] {
    return sentence.replace(regExp, ``).split(` `);
}

function getReverseWords(words: string[]): string[] {

    return words.map((word: string): string => {
        console.log(word);
        return word.split(``).reverse().join(``);
    });
}

console.log(`Проверка 1) s1tar3t 2 hellow  ->  t1rat3s 2 wolleh : `, getReverseString(`s1tar3t 2 hellow`));
console.log(`Проверка 2) s1ta$%r3t 2 hel^low  ->  t1ra$%t3s 2 wol^leh : `, getReverseString(`s1ta$%r3t 2 hel^low`));
console.log(`Проверка 3) s1tar3t 2   low5  ->  t1rat3s 2   wol5 : `, getReverseString(`s1tar3t 2   low5`));
