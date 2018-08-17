export function getUnique<T>(...arr: T[]): T[] {
    const result: T[] = [];

    arr.forEach((item: T) => {
        if (result.indexOf(item) === -1) {
            result.push(item);
        }
    });

    return result;
}
