namespace Helpers {
    export function isInArray<T>(array: T[], ...params: T[]): boolean {
        let result: boolean = true;

        for (let i: number = 0; i < params.length; i += 1) {
            result = result && array.indexOf(params[i]) >= 0;

            if (!result) {
                break;
            }
        }

        return result;
    }

    export function summator(...params: (number | string)[]): number {
        let result: number = 0;

        params.forEach((val: number | string)  => {
            const value: number = typeof val === 'string' ?  parseInt(val, 10) : val;
            result += value ? value : 0;
        });

        return result;
    }

    export function getUnique<T>( ...params: T[]): T[] {
        const result: T[] = [];

        params.forEach((item: T, index: number) => {
            const indexes: number[] = [];
            for (let i: number = index + 1; i < params.length; i += 1) {
                if (item === params[i]) {
                    indexes.push(i);

                    if (indexes.length > 1) {
                        break;
                    }
                }
            }

            if (indexes.length === 1 && result.indexOf(item) === -1) {
                result.push(item);
            }
        });

        return result;
    }

    export function reverse(str: string): string {
        const words: string[] = str.split(' ');
        const rule: RegExp = new RegExp(/^[a-zA-Z]+$/);

        const resultWords: string[] = words.map((word: string) => {
            const result: string[] = word.split('');

            for (let i: number = 0; i < word.length ; i += 1) {
                if (rule.test(word[i])) {
                    for (let j: number = word.length - i - 1; j >= 0; j -= 1) {
                        if (rule.test(result[j])) {
                            result[j] = word[i];
                            break;
                        }
                    }
                }
            }

            return result.join('');
        });

        return resultWords.join(' ');
    }
}


// == START isInArray() ==

type Foo = {
    bar: number,
};
const obj1: Foo = {
    bar: 15,
};

const obj2: Foo = {
    bar: 25,
};

console.log('Helpers.isInArray()', Helpers.isInArray([obj1, obj2], obj1, obj2));
console.log('Helpers.summator()', Helpers.summator('123', '123', 123));
console.log('Helpers.getUnique()', Helpers.getUnique(obj1, obj1, obj2));
console.log('Helpers.reverse()', Helpers.reverse('te1st2t'));