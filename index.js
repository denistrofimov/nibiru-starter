/**
 * Created by denistrofimov on 10.08.16.
 */

var nibiru = require('nibiru');
var path = require('path');

nibiru(path.join(__dirname, 'app')).then(function (core) {


    // catch 404 and forward to error handler
    core.app.use(function (req, res, next) {
        next(core.service('utils').error('Не найдено', 404));
    });

    // error handlers
    core.app.use(function (err, req, res, next) {
        var message = err.message || "Internal server error";
        var status = err.status || 500;
        res.status(status);
        res.send({
            code: status,
            message: message,
            url: req.url
        });
        console.error(err.errors || err.stack);
    });


}).catch(function (err) {
    console.error(err.stack);
});