/**
 * Created by denistrofimov on 10.08.16.
 */

module.exports = function (core) {

    return echo;

    function echo(request) {

        return request.q('text').then(function (params) {

            return {
                echo: params.text
            }

        });

    }
};