/**
 * Created by denistrofimov on 10.08.16.
 */

var express = require('express');
var logger = require('morgan');
var bodyParser = require('body-parser');
var accepts = require('accepts');

/**
 *
 * @param {Core} core
 * @returns {app}
 */
module.exports = function (core) {

    var app = express();

    app.use(function (req, res, next) {
        /**
         * @type {function}
         */
        req.q = core.service('params').bind(req);
        req.accepts = accepts(req);
        next();
    });

    app.use(logger('dev'));
    app.use(bodyParser.json({limit: '32mb'}));
    app.use(bodyParser.urlencoded({extended: false}));

    return app;
};