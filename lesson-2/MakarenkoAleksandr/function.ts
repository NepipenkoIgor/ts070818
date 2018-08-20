
function isInArray<T>(array: T[], ...args: T[]): boolean {
  return args.every(element => array.includes(element));
}
console.log('isInArray ' + isInArray(Array('Mary', 'Tom', 'Jack', 'Jill2'), 'Mary', 'Tom', 'Jack2'));

function summator(...args: (string | number)[]) {
  return args.reduce((accumulator: number, element: number) => {
    if (typeof element === 'number' && !isNaN(element)) {
      return accumulator += element;
    } else if (typeof element === 'string' && !isNaN(Number(element))) {
      return accumulator += Number(element);
    }
  }, 0);
}
console.log('Summ ' + summator(1, 2, '3', 4, 5).toString());

function getUnique(...args: number[]): number[] {
  return Array.from(new Set(args));
}
console.log(getUnique(8, 1, 1, 2, 3, 5, 6, 6, 7));
