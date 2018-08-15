export function isInArray<T>(arr: T[], ...args: T[]): boolean {
    return args.every((element: T): boolean => {
        return arr.includes(element);
    });
}

export function toNum (item: strOrNum): number {
    const result: number = typeof item === 'number' ? item : parseFloat(item);
    return isNaN(result) ? 0 : result;
}

export function summator(...args: strOrNum []): number {
    return args.map(toNum).reduce((sum: number, entry: number) => {
        return sum + entry;
    });
}

export function getUnique<T>(...args: T[]): T[] {
    return args.filter((elem: T, index: number, arr: T[]): boolean => {
        return arr.indexOf(elem) === index;
    });
}

const SYMBOLS: RegExp = new RegExp(/[0-9$&+,:;=?@#|'<>.^*()%!-]/);

export function stringReverse(initialWord: string): string {
    const arr: string[] = initialWord.toString().split('');
    const targetArray: string[] = [];
    const obj: { [index: number]: string } = {};

    for (let i: number = 0; i < arr.length; i++) {
        if (!arr[i].match(SYMBOLS)) {
            targetArray.unshift(arr[i]);
        } else {
            obj[i] = arr[i];
        }
    }

    for (const [key, value] of Object.entries(obj)) {
        targetArray.splice(parseInt(key, 10), 0, value);
    }

    return targetArray.join('');
}
