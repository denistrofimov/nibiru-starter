/**
 * Created by denistrofimov on 02.02.16.
 */

module.exports = function (base) {

    return {
        debug: true,
        mongo: {
            host: "localhost",
            database: "nibiru"
        },
        server: {
            "port": 7051,
            "host": "host"
        }
    }
};