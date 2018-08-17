type InArgType = string | number;

function isInArray(array: InArgType[], ...param: InArgType[]):boolean {
    if(Array.isArray(array)) {
        for(let p in param) {
            if(array.indexOf(p) == -1) {
                return false;
            }
        }
    }
    return true;
}

function summator(inArg: InArgType[]) : InArgType {
    let result: InArgType = (typeof inArg === 'string' ? '' : 0);

    for(let p in inArg) {
        result += p;
    }
    return result;
}

function getUnique(...inArray: InArgType[]): InArgType[] {
    let result: InArgType[] = [];

    for (let i: number = 0; i < inArray.length; i++) {
        let v = inArray[i];
        for (let j: number = 0; j < result.length; j++) {
            if (result[j] !== v)
                result.push(v);
        }
    }
    return result;
}

