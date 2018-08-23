/*
   Написать функцию котороя будет разворачивать буквы в словах предложения, но только лишь буквы
   цифры и специальные символы должны остаться на месте
      s1tar3t 2 hellow  ->  t1rat3s 2 wolleh
      s1ta$%r3t 2 hel^low  ->  t1ra$%t3s 2 wol^leh
      s1tar3t 2   low5  ->  t1rat3s 2   wol5
 */

function wordReverser(str: string): string {
    const wordRegex: RegExp = /(\s*)(\S+)(\s*)/g;
    const letterRegex: RegExp = /[A-Za-z]/;

    let found: null | RegExpExecArray = null;
    let result: string = '';

    /* tslint:disable-next-line */
    while (found = wordRegex.exec(str)) {
        const [, prefix, word, suffix] = found;
        const wordLetters: string[] = [];

        let reversedWord: string = '';

        // O(2*n) => O(n)
        for (let i: number = 0; i < word.length; i++) {
            const symbol: string = word[i];
            if (letterRegex.test(symbol)) {
                wordLetters.push(symbol);
            }
        }

        for (let i: number = 0; i < word.length; i++) {
            const symbol: string = word[i];
            reversedWord += letterRegex.test(symbol) ? wordLetters.pop(): symbol;
        }

        result += `${prefix}${reversedWord}${suffix}`;
    }

    return result;
}
