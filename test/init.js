module.exports = require('should');

var Schema = require('jugglingdb').Schema;

global.getSchema = function() {
    var db = new Schema(require('../'), { database: ':memory:' });
    db.log = function (a) { console.log(a); };
    return db;
};
