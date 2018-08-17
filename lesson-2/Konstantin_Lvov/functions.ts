// Константин Львов
// домашнее задание к уроку № 2
// в таком виде tslint перестал ругаться
function isInArray(a: number[], ...xs: number[]): boolean {
    for (const x in xs) {
        const xsElement: number = xs[x];
        if (a.indexOf(xsElement) === -1) {
            return false;
        }
    }
    return true;
}

function summator(...xs: any[]): number {
    let r: number = 0;
    for (const x in xs) {
        const elem: any = xs[x];
        if ('string' === typeof elem) {
            const maybeNum: any = parseInt(elem, 10);
            if (! isNaN(maybeNum)) {
                r += maybeNum;
            }
        } else if ('number' === typeof elem) {
            r += elem;
        }
    }
    return r;
}

// stackoverflow нам в помощь:
// https://stackoverflow.com/questions/1960473/get-all-unique-values-in-a-javascript-array-remove-duplicates
function getUnique(xs: any[]): any[] {
    return xs.filter( (elementVal: any, index: number, arr: any[]) => arr.indexOf(elementVal) === index);
}


function isLetter(sym: string): boolean {
    return new Boolean(sym.match(/[a-zа-яё]/i)).valueOf();
}

function makeBadWord(word: string): string {
    let r: string = '';
    const l: number = word.length;
    for (let i: number = 0; i < l; i++) {
        const s: string = word.charAt(i);
        if (isLetter(s)) {
            r = s + r;
        }
    }
    for (let i: number = 0; i < l; i++) {
        const s: string = word.charAt(i);
        if (! isLetter(s)) {
            r = [r.slice(0, i), s, r.slice(i)].join(''); // insert s in position i
        }
    }
    return r;
}

function makeBadSentence(sentence: string): string {
    const words: string[] = sentence.split(/\s+/);
    return words.map((word: string, index:number, arr: string[]) => makeBadWord(word)).join(' ');
}

