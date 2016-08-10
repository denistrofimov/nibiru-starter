/**
 * Created by denistrofimov on 28.01.16.
 */

var crypto = require('crypto');

module.exports = function () {
    return function (input) {
        return crypto.createHash('md5').update(input).digest('hex')
    };
};