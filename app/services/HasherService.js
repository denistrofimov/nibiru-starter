/**
 * Created by denistrofimov on 03.02.16.
 */

var crypto = require('crypto');

module.exports = function (config) {
    return function (input) {
        return crypto.createHash(config.hasher || 'sha').update(input).digest('hex');
    }
};