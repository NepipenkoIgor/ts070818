"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isInArray(arr) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return args.every(function (element) {
        return arr.includes(element);
    });
}
exports.isInArray = isInArray;
function toNum(item) {
    var result = typeof item === 'number' ? item : parseFloat(item);
    return isNaN(result) ? 0 : result;
}
exports.toNum = toNum;
function summator() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args.map(toNum).reduce(function (sum, entry) {
        return sum + entry;
    });
}
exports.summator = summator;
function getUnique() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args.filter(function (elem, index, arr) {
        return arr.indexOf(elem) === index;
    });
}
exports.getUnique = getUnique;
var SYMBOLS = new RegExp(/[0-9$&+,:;=?@#|'<>.^*()%!-]/);
function stringReverse(initialWord) {
    var arr = initialWord.toString().split('');
    var targetArray = [];
    var obj = {};
    for (var i = 0; i < arr.length; i++) {
        if (!arr[i].match(SYMBOLS)) {
            targetArray.unshift(arr[i]);
        }
        else {
            obj[i] = arr[i];
        }
    }
    for (var _i = 0, _a = Object.entries(obj); _i < _a.length; _i++) {
        var _b = _a[_i], key = _b[0], value = _b[1];
        targetArray.splice(parseInt(key, 10), 0, value);
    }
    return targetArray.join('');
}
exports.stringReverse = stringReverse;
