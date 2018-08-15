function summator(...args: string[]): string;
function summator(...args: number[]): number;
function summator(...args: any[]): string | number | never {
    if (!args.length) {
        throw new Error('You must provide at least one argument');
    }

    if (typeof args[0] === 'string') {
        return args.join('');
    } else {
        return args.reduce((first: number, second: number) => first + second, 0);
    }
}