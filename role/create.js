/**
 * Created by PC on 10/8/2016.
 */
'use strict';
module.exports = function createRoles(req, res) {

    var errorHandler = function(status, message) {
        res.status(status).json({
            message: message.toString()
        });
    };

    try{
        var Role = require('./role.object');
        var validatePropertyObject = require('../utils/validatePropertyObject');

        var createRole= function() {
            var role = new Role({
                name: req.body.name,
                code: req.body.code
            });

            role.save(function(err, doc) {
                if (err) {
                    errorHandler(400, err);
                }
                else {
                    res.status(201).json(doc);
                }
            });
        }
        Promise.all([validatePropertyObject.call(null, req.body, ['code', 'name'])])
            .then(createRole)
            .catch(function(err) {
                errorHandler(err.status, err.message);
            });
    }
    catch (ex) {
        console.log('create role: ' + ex.toString() + ' inline: ' + ex.stack);
        errorHandler(500, ex);
    }
};




