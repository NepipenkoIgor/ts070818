export function summator(...args: (string | number)[]): number {
    let result: number = 0;

    args.forEach((item: string | number) => {
        if (typeof item === 'string') {
            const isValidString: boolean = /^[0-9]*[.]?[0-9]+$/.test(item);
            item = isValidString ? parseFloat(item) : 0;
        }
        result += (item || 0);
    });

    return result;
}
