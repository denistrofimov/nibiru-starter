/**
 * Created by denistrofimov on 27.01.16.
 */

var _ = require('lodash');

module.exports = function () {

    /**
     * Utility service
     * @type {{now: function, param: function, error: function, clean_phone: function}}
     */
    return {
        /**
         * Returns current date
         * @returns {Date}
         */
        now: function () {
            return new Date()
        },

        /**
         * Returns object with fields or current value
         * @returns {Object|Number|String}
         */
        param: function () {
            var self = this;
            if (arguments.length === 1)
                return self.body[arguments[0]] || self.query[arguments[0]];
            var retVal = {};
            _.each(arguments, function (key) {
                retVal[key] = param.apply(self, [key]);
            });
            return retVal;
        },

        /**
         * Creates new Error object with status field
         * @param message
         * @param [status]
         * @returns {Error}
         */
        error: function (message, status) {
            var error = new Error(message);
            error.status = status || 500;
            return error;
        },

        /**
         * Return clean phone number
         * @param input
         * @returns {String|Null}
         */
        clean_phone: function (input) {

            // not string
            if (!input || !_.isString(input))
                return null;

            // remove all except digits
            input = "+" + input.replace(/[^0-9.]/g, '');

            if (!input.length in [12, 13])
                return null;

            return input;
        }
    };
};