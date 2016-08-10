/**
 * Created by denistrofimov on 28.01.16.
 */

module.exports = function () {

    function random(low, high) {
        return Math.floor(Math.random() * (high - low + 1) + low);
    }

    return function (len) {
        var numbers = new Array(len);
        for (var i = 0; i < numbers.length; i++)
            numbers[i] = random(0, 9);
        return numbers.join('');
    };
};