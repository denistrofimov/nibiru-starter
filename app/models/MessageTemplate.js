/**
 * Created by Denis Trofimov on 07.10.15.
 */

var handlebars = require('handlebars');
var moment = require("moment");
var Schema = require('mongoose').Schema;

//noinspection JSUnresolvedFunction
handlebars.registerHelper('dateFormat', function (context) {
    //noinspection JSUnresolvedFunction
    return moment(new Date(context)).format("DD.MM.YYYY");
});

module.exports = function () {
    return new Schema({
        content: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        code: {
            type: String,
            required: true,
            unique: true
        }
    }).method('renderTitle', function (context) {
        //noinspection JSUnresolvedFunction
        var template = handlebars.compile(this.title, {});
        return template(context);
    }).method('renderContent', function (context) {
        //noinspection JSUnresolvedFunction
        var template = handlebars.compile(this.content, {});
        return template(context);
    });
};