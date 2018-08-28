
type primitive = string | number | boolean;

function isAnArray(array: primitive[], ...input: primitive []): boolean {
    for (const item of input) {
        if (array.indexOf(item) < 0 ) { return false; }
    }
    return true;
}

type strNum = string | number;
function summator(...input: strNum[]): number {
    let sum: number = 0;
    for (const item of input) {
        if (typeof item === 'string') {
            const num: number = parseInt(item);
            sum += isNaN(num) ? 0 : num;
        } else {
            sum += item;
        }
    }
    return sum;
}


function getUnique(...input: primitive[]): primitive[] {
    const result: primitive[] = [];
    for (const item of input) {
        if (result.indexOf(item) < 0) {
            result.push(item);
        }
    }
    return result;
}

type idxMap = {
    idx: number,
    symb: string
};
function reverseWord(word: string): string {
    const letters: string[] = word.split('');
    const map: idxMap[] = letters
            .map((symb: string, idx: number) =>  {
                return { idx, symb };
            })
            .filter((letter: idxMap) => {
                return /^[A-zА-яЁё]$/.test(letter.symb) &&
                    (['[', ']', '`', '_', '^'].indexOf(letter.symb) < 0);
            });
    let newWord: string = '';

    for (let index: number = 0; index < word.length; index++) {
        const inMap: number = map.reduce((result: number , value: idxMap, idx: number ) => {
            result = (value.idx === index) ? idx : result;
            return result;
            }, -1);
        if (inMap < 0) {
            newWord += word.charAt(index);
        } else {
            newWord += map[map.length - 1 - inMap].symb
        }
    }
    return newWord;
}

function reverseWords(term: string): string {
    const words: string[] = term.split(' ');
    const newWords: string[] = [];
    for (const word of words) {
        newWords.push(reverseWord(word));
    }
    return newWords.join(' ');
}