/**
 * Created by denistrofimov on 12.02.16.
 */

module.exports = function (core) {

    var config = core.config;

    all.$method = 'get';
    all.$route = '/api/:entity';

    return all;

    function all(request) {

        return request.q('entity').then(function (params) {

            var Entity = core.model(params['entity']);

            var page = request.query.page ? parseInt(request.query.page) - 1 : 0;
            var per_page = request.query.per_page ? parseInt(request.query.per_page) : (config['default_per_page'] || 50);
            var populate = request.query.populate;
            var query = request.query.query ? JSON.parse(request.query.query) : {};
            var sort = request.query.sort;

            if (page < 0)
                page = 0;

            return Entity.count(query).then(function (count) {

                //noinspection JSUnresolvedFunction
                return Entity.find(query)
                    .limit(per_page)
                    .skip(page * per_page)
                    .sort(sort)
                    .deepPopulate(populate).exec().then(function (instances) {
                        return {
                            result: instances,
                            meta: {
                                count: count,
                                page: page,
                                per_page: per_page
                            }
                        };
                    });
            });

        });

    }
};