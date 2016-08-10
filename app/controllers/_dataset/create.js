/**
 * Created by denistrofimov on 12.02.16.
 */

module.exports = function (core) {

    create.$method = 'post';
    create.$route = '/api/:entity';

    return create;

    function create(request) {

        return request.q('entity').then(function (params) {

            return core.model(params['entity']).create(req.body);

        });

    }
};