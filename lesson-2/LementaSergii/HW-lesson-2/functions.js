var Helpers;
(function (Helpers) {
    function isInArray(array) {
        var params = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            params[_i - 1] = arguments[_i];
        }
        var result = true;
        for (var i = 0; i < params.length; i += 1) {
            result = result && array.indexOf(params[i]) >= 0;
            if (!result) {
                break;
            }
        }
        return result;
    }
    Helpers.isInArray = isInArray;
    function summator() {
        var params = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            params[_i] = arguments[_i];
        }
        var result = 0;
        params.forEach(function (val) {
            var value = typeof val === 'string' ? parseInt(val, 10) : val;
            result += value ? value : 0;
        });
        return result;
    }
    Helpers.summator = summator;
    function getUnique() {
        var params = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            params[_i] = arguments[_i];
        }
        var result = [];
        params.forEach(function (item, index) {
            var indexes = [];
            for (var i = index + 1; i < params.length; i += 1) {
                if (item === params[i]) {
                    indexes.push(i);
                    if (indexes.length > 1) {
                        break;
                    }
                }
            }
            if (indexes.length === 1 && result.indexOf(item) === -1) {
                result.push(item);
            }
        });
        return result;
    }
    Helpers.getUnique = getUnique;
    function reverse(str) {
        var words = str.split(' ');
        var rule = new RegExp(/^[a-zA-Z]+$/);
        var resultWords = words.map(function (word) {
            var result = word.split('');
            for (var i = 0; i < word.length; i += 1) {
                if (rule.test(word[i])) {
                    for (var j = word.length - i - 1; j >= 0; j -= 1) {
                        if (rule.test(result[j])) {
                            result[j] = word[i];
                            break;
                        }
                    }
                }
            }
            return result.join('');
        });
        return resultWords.join(' ');
    }
    Helpers.reverse = reverse;
})(Helpers || (Helpers = {}));
var obj1 = {
    bar: 15
};
var obj2 = {
    bar: 25
};
console.log('Helpers.isInArray()', Helpers.isInArray([obj1, obj2], obj1, obj2));
console.log('Helpers.summator()', Helpers.summator('123', '123', 123));
console.log('Helpers.getUnique()', Helpers.getUnique(obj1, obj1, obj2));
console.log('Helpers.reverse()', Helpers.reverse('te1st2t'));
