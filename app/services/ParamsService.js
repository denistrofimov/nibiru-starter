/**
 * Created by denistrofimov on 12.02.16.
 */

var _ = require('lodash');
var Promise = require('bluebird');
var util = require('util');

module.exports = function (config) {

    var error = config['params_error'] || 'Undefined parameter "%s"';

    return params;

    function params(){

        var req = this;
        var args = arguments;

        return new Promise(function (resolve) {

            if (!args.length)
                throw  new Error('Parameter list is not defined');

            var params = _.extend({}, req.params, req.body, req.query);

            var required;

            var output = _.reduce(args, function (memo, name) {

                required = true;

                if (_.startsWith(name, '!')) {
                    name = name.substr(1);
                    required = false;
                }

                if (!params[name] && required)
                    throw new Error(util.format(error, name));

                memo[name] = params[name];

                return memo;
            }, {});

            resolve(output);

        });

    }
};