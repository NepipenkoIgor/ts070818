function isInArray<T>(array: T[], ...elements: T[]): boolean {
    return elements.every((element: T) => array.indexOf(element) !== -1);
}

type NumberAndString = number | string;

function summator(...elements: NumberAndString[]): number {
    let sum: number = 0;
    elements.forEach((element: NumberAndString) => {
        sum += !isNaN(+element) ? +element : 0;
    });

    return sum;
}

function getUnique<T>(...elements: T[]): T[] {
    const map: Map<T, number> = new Map();
    const result: T[] = [];

    elements.forEach((element: T) => {
        map.set(element, 1);
    });

    for (const element of map.keys()) {
        result.push(element);
    }

    return result;
}

function invert(str: string): string {
    const arrStr: string[] = str.split('');
    let words: string[][] = [];
    let wordArray: string[] = [];
    let resultStr: string = '';

    arrStr.forEach((e: string) => {
        if (e === ' ') {
            words.push(wordArray);
            words.push([' ']);
            wordArray = [];
        } else {
            wordArray.push(e);
        }
    });

    words.push(wordArray);

    words = words.map((word: string[]) => {
        const letters: string[] = [];

        word.forEach((letter: string) => {
            if (!!(letter).match(/[a-z]/i)) {
                letters.push(letter as string);
            }
        });

        return word.map((letter: string) => {
            if (!!(letter).match(/[a-z]/i)) {
                return letters.pop() as string;
            } else {
                return letter;
            }
        });
    });

    words.forEach((word: string []) => {
        resultStr += word.join('');
    });

    return resultStr;
}