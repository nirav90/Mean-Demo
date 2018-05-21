const monk = require('monk');
const db = monk('localhost/nodedb');
const collection = db.get("tbluser");

module.exports.getAllUsers = function (cb) {
    collection.find({}).then(function (results) {
        
        cb(results);
    }, function (err) {
        console.log(err);
        cb(null);
    });
}

module.exports.insertUser = function (user, cb) {
    collection.insert(user).then(function (result) {
        cb(result);
    }, function (err) {
        console.log(err);
        cb(null);
    });
}