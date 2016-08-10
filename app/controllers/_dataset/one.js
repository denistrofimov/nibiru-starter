/**
 * Created by denistrofimov on 12.02.16.
 */

module.exports = function (core) {

    var error = core.service('utils').error;

    one.$method = 'get';
    one.$route = '/api/:entity/:_id([0-9a-fA-F]{24})';

    return one;

    function one(request) {

        return request.q('entity', '_id').then(function (params) {

            //noinspection JSUnresolvedFunction
            return core.model(params['entity']).findOne({_id: params._id}).deepPopulate(request.query.populate);

        }).then(function (instance) {

            if (!instance)
                throw error('Instance not found', 404);

            return instance;

        });

    }
};