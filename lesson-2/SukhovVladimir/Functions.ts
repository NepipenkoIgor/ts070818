// 1 isInArray
function isInArray<T>(array: ReadonlyArray<T>, ...args: T[]): boolean {
    return !args.some((item: T) => array.indexOf(item) === -1 );
}

// 2
type summerArgs = string | number;
function summator(...args: summerArgs[]): number {
    return Array.from(args).reduce<number>((accum: number, item: summerArgs) => {
        return typeof item === 'string' ? !isNaN(parseInt(item)) ? parseInt(item) + accum : accum : item + accum;
    }, 0);
}

// 3

function getUnique(...args: object[]): object[] {
    const result: Set<object> = new Set();
    for (const item of Array.from(args)) {
        result.add(item);
    }
    return Array.from(result);
}

// 4

function reverse(sentence: string): string {
    const result: string[] = [];
    const sentenceArr: string[] = sentence.split(' ');
    for (const word of Array.from(sentenceArr)) {
        result.push(reverseWord(word));
    }
    return result.join(' ');
}

function reverseWord(word: string): string {
    const result: string[] = Array.from(word);
    for (let i: number = 0; i < word.length; i++) {
        const letters: RegExp = /^[A-Za-z]+$/;
        if (word[i].match(letters) && word[word.length - i - 1].match(letters)
            && word[word.length - 1].match(letters)) {
            result[word.length - i - 1] = word[i];
        }
        if (word[i].match(letters) && !word[word.length - 1].match(letters)) {
            result[word.length - i - 2] = word[i];
        }
      }
    return result.join('');
}

