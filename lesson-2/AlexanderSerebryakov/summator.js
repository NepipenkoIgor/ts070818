"use strict";
/**
 * ������ ������� summator(), ������� �������� ��������� �� ���������
 * ��������� ����� ���� ���� ���������� ���� ��������� ����. ���������� �� �� ����������. ���������� NaN
 */
function summator() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var res = 0;
    function isNumber(v) {
        return typeof v === 'number';
    }
    for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
        var v = args_1[_a];
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
