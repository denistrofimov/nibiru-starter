/**
 * Created by denistrofimov on 12.02.16.
 */

module.exports = function (core) {

    var error = core.service('utils').error;

    remove.$method = 'delete';
    remove.$route = '/api/:entity/:_id([0-9a-fA-F]{24})';

    return remove;

    function remove(request) {

        return request.q('entity', '_id').then(function (params) {

            return core.model(params['entity']).findOne({_id: params._id});

        }).then(function (instance) {

            if (!instance)
                throw error('Instance not found', 404);

            return instance.remove();

        }).then(function () {
            return {};
        });

    }
};