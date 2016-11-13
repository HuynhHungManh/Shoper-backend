/**
 * Created by PC on 10/8/2016.
 */
'use strict';
module.exports = function createGroups_type(req, res) {

    var errorHandler = function(status, message) {
        res.status(status).json({
            message: message.toString()
        });
    };

    try {
        var Group_type = require('../group_type/group_type.object');

        var validatePropertyObject = require('../utils/validatePropertyObject');


        var createGroup_type = function() {
            var group_type = new Group_type({
                code: req.body.code
            });
            group_type.save(function(err, doc) {
                if (err) {
                    errorHandler(400, err);
                }
                else {
                    res.status(201).json(doc);
                }
            });
        };

        Promise.all([
            validatePropertyObject.call(null, req.body, ['code'])])
            .then(createGroup_type)
            .catch(function(err) {
                errorHandler(err.status, err.message);
            });
    }
    catch (ex) {
        console.log('create group_type: ' + ex.toString() + ' inline: ' + ex.stack);
        errorHandler(500, ex);
    }
};
