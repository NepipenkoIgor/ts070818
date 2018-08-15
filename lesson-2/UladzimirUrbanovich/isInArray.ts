function isInArray<T>(array: T[], ...args: T[]): boolean {
    return !!args.length && args.every((item: T) => array.indexOf(item) !== -1);
}