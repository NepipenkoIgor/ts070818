/*
   писать функцию summator(), которая сумирует переданые ей аргументы.
   Аргументы могут быть либо строкового либо числового типа. Количество их не ограничено. Проверяйте NaN
 */
function isNumber(a: primitive): a is number {
    return typeof a === 'number';
}

type stringOrNumber = string | number;

function summator(...args: stringOrNumber[]): number {
    return args.reduce((sum: number, val: stringOrNumber) => {
        if (isNumber(val)) {
            return sum + (Number.isNaN(val) ? 0 :  val);
        } else {
            return sum + +val;
        }
    }, 0);
}
