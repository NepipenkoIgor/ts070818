
type primitive = string | number | boolean;

function isAnArray(array: primitive[], ...input: primitive []): boolean {
    for (const item of input) {
        if (array.indexOf(item) < 0 ) { return false; }
    }
    return true;
}

type strNum = string | number;
function summator(...input: strNum[]): number {
    let sum: number = 0;
    for (const item of input) {
        if (typeof item === 'string') {
            const num: number = parseInt(item);
            sum += isNaN(num) ? 0 : num;
        } else {
            sum += item;
        }
    }
    return sum;
}


function getUnique(...input: primitive[]): primitive[] {
    const result: primitive[] = [];
    for (const item of input) {
        if (result.indexOf(item) < 0) {
            result.push(item);
        }
    }
    return result;
}
