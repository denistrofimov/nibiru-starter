/**
 * Created by denistrofimov on 16.07.16.
 */

var _ = require('lodash');
var Promise = require('bluebird');
var util = require('util');

module.exports = function () {

    var _caches = {};

    return function (name, fetcher) {

        if (!_caches[name])
            _caches[name] = new Cache(fetcher);

        return Promise.resolve(_caches[name])

    };

};

function Cache(fetcher) {

    this.fetcher = fetcher;

    var _objects = {};

    this.get = function (code) {

        if (_objects[code])
            return Promise.resolve(_objects[code]);

        if (!this.fetcher)
            return Promise.reject('There is no fetcher function');

        return this.fetcher(code).then(function (object) {

            _objects[code] = object;

            return object

        })

    };

    this.drop = function (code) {

        delete _objects[code];

        return Promise.resolve()

    };

    this.put = function (code, object) {

        _objects[code] = object;

        return Promise.resolve(object)

    }

}