/**
 * Created by denistrofimov on 12.02.16.
 */

module.exports = function (core) {

    var error = core.service('utils').error;

    update.$method = 'put';
    update.$route = '/api/:entity/:_id([0-9a-fA-F]{24})';

    return update;

    function update(request) {

        return request.q('entity', '_id').then(function (params) {

            return core.model(params['entity']).findOne({_id: params._id});

        }).then(function (instance) {

            if (!instance)
                throw error('Instance not found', 404);

            return instance.set(req.body).save();

        });

    }
};