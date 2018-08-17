/*
    писать функцию summator(), которая сумирует переданые ей аргументы.
    Аргументы могут быть либо строкового либо числового типа. Количество их не ограничено. Проверяйте NaN
*/

function summator(...args: (string | number)[]): null | number {
    let res: number = 0;

    function isNumber(v: number | string): v is number {
        return typeof v === 'number';
    }

    for (const v of args) {
        if (isNumber(v)) {
            res += v;
        }
        else if (!isNaN(parseFloat(v))) {
            res += parseFloat(v);
        }
        else {
            return null;
        }
    }

    return res;
}

console.log(summator(1, 2, 3))