/**
 * Created by denistrofimov on 28.01.16.
 */

module.exports = function () {

    var s4 = function () {
        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };

    return function (num) {
        num = num || 1;
        var result = '';
        for (var i = 0; i < num; i++) {
            result += (s4() + s4() + "-" + s4() + "-" + s4() + "-" + s4() + "-" + s4() + s4() + s4());
        }
        return result;
    };
};