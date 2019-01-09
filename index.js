; (function () {
    "use strict"
    var _global;
    var dynamicAssignment = function (obj, arr, val) {
        function eachVal(m, f, val) {
            m[f] = val;
            return m[f];
        }
        function judges(obj, arr, val, times) {
            if (times < arr.length) {
                judges(eachVal(obj, arr[times - 1], obj[arr[times - 1]]), arr, val, times + 1)
            }
            if (times === arr.length) {
                eachVal(obj, arr[times - 1], val);
            }
        }
        judges(obj, arr, val, 1);
        return obj;
    }
    _global = (function () { return this || (0, eval)('this'); }());
    if (typeof module !== "undefined" && module.exports) {
        module.exports = dynamicAssignment;
    } else if (typeof define === "function" && define.amd) {
        define(function () { return dynamicAssignment; });
    } else {
        !('dynamicAssignment' in _global) && (_global.dynamicAssignment = dynamicAssignment);
    }
}());